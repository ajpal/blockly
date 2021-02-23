/**
 * @license
 * Copyright 2016 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview A class that manages a surface for dragging blocks.  When a
 * block drag is started, we move the block (and children) to a separate DOM
 * element that we move around using translate3d. At the end of the drag, the
 * blocks are put back in into the SVG they came from. This helps performance by
 * avoiding repainting the entire SVG on every mouse move while dragging blocks.
 * @author picklesrus
 */

'use strict';

goog.provide('Blockly.BlockDragSurfaceSvg');
goog.require('Blockly.utils');
goog.require('Blockly.utils.Coordinate');
goog.require('Blockly.utils.dom');
goog.require('Blockly.utils.Svg');


/**
 * Class for a drag surface for the currently dragged block. This is a separate
 * SVG that contains only the currently moving block, or nothing.
 * @param {!Element} container Containing element.
 * @constructor
 */
Blockly.BlockDragSurfaceSvg = function(container) {
  /**
   * @type {!Element}
   * @private
   */
  this.container_ = container;
  this.createDom();
};

/**
 * The SVG drag surface. Set once by Blockly.BlockDragSurfaceSvg.createDom.
 * @type {SVGElement}
 * @private
 */
Blockly.BlockDragSurfaceSvg.prototype.SVG_ = null;

/**
 * Containing HTML element; parent of the workspace and the drag surface.
 * @type {Element}
 * @private
 */
Blockly.BlockDragSurfaceSvg.prototype.container_ = null;

/**
 * Cached value for the scale of the drag surface.
 * Used to set/get the correct translation during and after a drag.
 * @type {number}
 * @private
 */
Blockly.BlockDragSurfaceSvg.prototype.scale_ = 1;

/**
 * Cached value for the translation of the drag surface.
 * This translation is in pixel units, because the scale is applied to the
 * drag group rather than the top-level SVG.
 * @type {Blockly.utils.Coordinate}
 * @private
 */
Blockly.BlockDragSurfaceSvg.prototype.surfaceXY_ = null;

/**
 * Create the drag surface and inject it into the container.
 */
Blockly.BlockDragSurfaceSvg.prototype.createDom = function() {
  if (this.SVG_) {
    return;  // Already created.
  }
  this.SVG_ = Blockly.utils.dom.createSvgElement(
      Blockly.utils.Svg.SVG, {
        'xmlns': Blockly.utils.dom.SVG_NS,
        'xmlns:html': Blockly.utils.dom.HTML_NS,
        'xmlns:xlink': Blockly.utils.dom.XLINK_NS,
        'version': '1.1',
        'class': 'blocklyBlockDragSurface'
      }, this.container_);
  this.SVG_.setAttribute('style', 'background:skyblue;opacity:0.4;');
};

/**
 * Set the SVG blocks on the drag surface's group and show the surface.
 * Only one block group should be on the drag surface at a time.
 * @param {!SVGElement} blocks Block or group of blocks to place on the drag
 * surface.
 */
Blockly.BlockDragSurfaceSvg.prototype.setBlocksAndShow = function(blocks) {
  if (this.SVG_.childNodes.length) {
    throw Error('Already dragging a block.');
  }
  // appendChild removes the blocks from the previous parent
  this.SVG_.appendChild(blocks);
  var  bbox = this.SVG_.getBBox();
  // Update the width and height using the size of the contents
  this.SVG_.setAttribute("width", bbox.x + bbox.width + bbox.x);
  this.SVG_.setAttribute("height", bbox.y + bbox.height + bbox.y);
  this.SVG_.style.display = 'block';
  this.surfaceXY_ = new Blockly.utils.Coordinate(0, 0);
};

/**
 * Translate the drag surface's SVG based on its internal state.
 * @private
 */
Blockly.BlockDragSurfaceSvg.prototype.translateSurfaceInternal_ = function() {
  var x = this.surfaceXY_.x;
  var y = this.surfaceXY_.y;
  // This is a work-around to prevent a the blocks from rendering
  // fuzzy while they are being dragged on the drag surface.
  x = x.toFixed(0);
  y = y.toFixed(0);
  this.SVG_.style.display = 'block';

  Blockly.utils.dom.setCssTransform(this.SVG_,
      'translate3d(' + x + 'px, ' + y + 'px, 0px)');
};

/**
 * Translate the entire drag surface during a drag.
 * We translate the drag surface instead of the blocks inside the surface
 * so that the browser avoids repainting the SVG.
 * Because of this, the drag coordinates must be adjusted by scale.
 * @param {number} x X translation for the entire surface.
 * @param {number} y Y translation for the entire surface.
 */
Blockly.BlockDragSurfaceSvg.prototype.translateSurface = function(x, y) {
  this.surfaceXY_ = new Blockly.utils.Coordinate(x * this.scale_, y * this.scale_);
  this.translateSurfaceInternal_();
};

/**
 * Reports the surface translation in scaled workspace coordinates.
 * Use this when finishing a drag to return blocks to the correct position.
 * @return {!Blockly.utils.Coordinate} Current translation of the surface.
 */
Blockly.BlockDragSurfaceSvg.prototype.getSurfaceTranslation = function() {
  var xy = Blockly.utils.getRelativeXY(/** @type {!SVGElement} */ (this.SVG_));
  return new Blockly.utils.Coordinate(xy.x / this.scale_, xy.y / this.scale_);
};

/**
 * Provide a reference to the drag group (primarily for
 * BlockSvg.getRelativeToSurfaceXY).
 * @return {SVGElement} Drag surface group element.
 */
Blockly.BlockDragSurfaceSvg.prototype.getGroup = function() {
  return this.SVG_;
};

/**
 * Get the current blocks on the drag surface, if any (primarily
 * for BlockSvg.getRelativeToSurfaceXY).
 * @return {Element} Drag surface block DOM element, or undefined if no blocks
 * exist.
 */
Blockly.BlockDragSurfaceSvg.prototype.getCurrentBlock = function() {
  return /** @type {Element} */ (this.SVG_.firstChild);
};

/**
 * Clear the group and hide the surface; move the blocks off onto the provided
 * element.
 * If the block is being deleted it doesn't need to go back to the original
 * surface, since it would be removed immediately during dispose.
 * @param {Element=} opt_newSurface Surface the dragging blocks should be moved
 *     to, or null if the blocks should be removed from this surface without
 *     being moved to a different surface.
 */
Blockly.BlockDragSurfaceSvg.prototype.clearAndHide = function(opt_newSurface) {
  if (opt_newSurface) {
    // appendChild removes the node from this.SVG_
    opt_newSurface.appendChild(this.getCurrentBlock());
  } else {
    this.SVG_.removeChild(this.getCurrentBlock());
  }
  this.SVG_.style.display = 'none';
  if (this.SVG_.childNodes.length) {
    throw Error('Drag group was not cleared.');
  }
  this.surfaceXY_ = null;
};
