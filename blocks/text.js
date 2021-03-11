/**
 * @license
 * Copyright 2012 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview Text blocks for Blockly.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

goog.provide('Blockly.Blocks.texts');  // Deprecated
goog.provide('Blockly.Constants.Text');

goog.require('Blockly');
goog.require('Blockly.Blocks');
goog.require('Blockly.FieldDropdown');
goog.require('Blockly.FieldImage');
goog.require('Blockly.FieldMultilineInput');
goog.require('Blockly.FieldTextInput');
goog.require('Blockly.FieldVariable');
goog.require('Blockly.Mutator');


/**
 * Unused constant for the common HSV hue for all blocks in this category.
 * @deprecated Use Blockly.Msg['TEXTS_HUE']. (2018 April 5)
 */
Blockly.Constants.Text.HUE = 160;

Blockly.defineBlocksWithJsonArray([  // BEGIN JSON EXTRACT
  // Block for text value
  {
    "type": "text",
    "message0": "%1",
    "args0": [{
      "type": "field_input",
      "name": "TEXT",
      "text": ""
    }],
    "output": "String",
    "style": "text_blocks",
    "helpUrl": "%{BKY_TEXT_TEXT_HELPURL}",
    "tooltip": "%{BKY_TEXT_TEXT_TOOLTIP}",
    "extensions": [
      "text_quotes",
      "parent_tooltip_when_inline"
    ]
  },
  {
    "type": "text_multiline",
    "message0": "%1 %2",
    "args0": [{
      "type": "field_image",
      "src": 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAARCAYAAADpP' +
             'U2iAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAAdhgAAHYYBXaITgQAAABh0RVh0' +
             'U29mdHdhcmUAcGFpbnQubmV0IDQuMS42/U4J6AAAAP1JREFUOE+Vks0KQUEYhjm' +
             'RIja4ABtZ2dm5A3t3Ia6AUm7CylYuQRaUhZSlLZJiQbFAyRnPN33y01HOW08z88' +
             '73zpwzM4F3GWOCruvGIE4/rLaV+Nq1hVGMBqzhqlxgCys4wJA65xnogMHsQ5luj' +
             'nYHTejBBCK2mE4abjCgMGhNxHgDFWjDSG07kdfVa2pZMf4ZyMAdWmpZMfYOsLiD' +
             'MYMjlMB+K613QISRhTnITnsYg5yUd0DETmEoMlkFOeIT/A58iyK5E18BuTBfgYX' +
             'fwNJv4P9/oEBerLylOnRhygmGdPpTTBZAPkde61lbQe4moWUvYUZYLfUNftIY4z' +
             'wA5X2Z9AYnQrEAAAAASUVORK5CYII=',
      "width": 12,
      "height": 17,
      "alt": '\u00B6'
    },{
      "type": "field_multilinetext",
      "name": "TEXT",
      "text": ""
    }],
    "output": "String",
    "style": "text_blocks",
    "helpUrl": "%{BKY_TEXT_TEXT_HELPURL}",
    "tooltip": "%{BKY_TEXT_TEXT_TOOLTIP}",
    "extensions": [
      "parent_tooltip_when_inline"
    ]
  },
  {
    "type": "text_join",
    "message0": "%{BKY_TEXT_JOIN_TITLE_CREATEWITH} %1 %2",
    "args0": [
      {
        "type": "input_value",
        "name": "ADD0"
      },
      {
        "type": "input_value",
        "name": "ADD1"
      }
    ],
    "output": "String",
    "style": "text_blocks",
    "helpUrl": "%{BKY_TEXT_JOIN_HELPURL}",
    "tooltip": "%{BKY_TEXT_JOIN_TOOLTIP}",
    "mutator": "jit_connection_mutator"
  },
  {
    "type": "text_append",
    "message0": "%{BKY_TEXT_APPEND_TITLE}",
    "args0": [{
      "type": "field_variable",
      "name": "VAR",
      "variable": "%{BKY_TEXT_APPEND_VARIABLE}"
    },
    {
      "type": "input_value",
      "name": "TEXT"
    }],
    "previousStatement": null,
    "nextStatement": null,
    "style": "text_blocks",
    "extensions": [
      "text_append_tooltip"
    ]
  },
  {
    "type": "text_length",
    "message0": "%{BKY_TEXT_LENGTH_TITLE}",
    "args0": [
      {
        "type": "input_value",
        "name": "VALUE",
        "check": ['String', 'Array']
      }
    ],
    "output": 'Number',
    "style": "text_blocks",
    "tooltip": "%{BKY_TEXT_LENGTH_TOOLTIP}",
    "helpUrl": "%{BKY_TEXT_LENGTH_HELPURL}"
  },
  {
    "type": "text_isEmpty",
    "message0": "%{BKY_TEXT_ISEMPTY_TITLE}",
    "args0": [
      {
        "type": "input_value",
        "name": "VALUE",
        "check": ['String', 'Array']
      }
    ],
    "output": 'Boolean',
    "style": "text_blocks",
    "tooltip": "%{BKY_TEXT_ISEMPTY_TOOLTIP}",
    "helpUrl": "%{BKY_TEXT_ISEMPTY_HELPURL}"
  },
  {
    "type": "text_indexOf",
    "message0": "%{BKY_TEXT_INDEXOF_TITLE}",
    "args0": [
      {
        "type": "input_value",
        "name": "VALUE",
        "check": "String"
      },
      {
        "type": "field_dropdown",
        "name": "END",
        "options": [
          [
            "%{BKY_TEXT_INDEXOF_OPERATOR_FIRST}",
            "FIRST"
          ],
          [
            "%{BKY_TEXT_INDEXOF_OPERATOR_LAST}",
            "LAST"
          ]
        ]
      },
      {
        "type": "input_value",
        "name": "FIND",
        "check": "String"
      }
    ],
    "output": "Number",
    "style": "text_blocks",
    "helpUrl": "%{BKY_TEXT_INDEXOF_HELPURL}",
    "inputsInline": true,
    "extensions": [
      "text_indexOf_tooltip"
    ]
  },
  {
    "type": "text_charAt",
    "message0": "%{BKY_TEXT_CHARAT_TITLE}", // "in text %1 %2"
    "args0": [
      {
        "type":"input_value",
        "name": "VALUE",
        "check": "String"
      },
      {
        "type": "field_dropdown",
        "name": "WHERE",
        "options": [
          ["%{BKY_TEXT_CHARAT_FROM_START}", "FROM_START"],
          ["%{BKY_TEXT_CHARAT_FROM_END}", "FROM_END"],
          ["%{BKY_TEXT_CHARAT_FIRST}", "FIRST"],
          ["%{BKY_TEXT_CHARAT_LAST}", "LAST"],
          ["%{BKY_TEXT_CHARAT_RANDOM}", "RANDOM"]
        ]
      }
    ],
    "output": "String",
    "style": "text_blocks",
    "helpUrl": "%{BKY_TEXT_CHARAT_HELPURL}",
    "inputsInline": true,
    "mutator": "text_charAt_mutator"
  }
]);  // END JSON EXTRACT (Do not delete this comment.)

Blockly.Blocks['text_getSubstring'] = {
  /**
   * Block for getting substring.
   * @this {Blockly.Block}
   */
  init: function() {
    this['WHERE_OPTIONS_1'] = [
      [Blockly.Msg['TEXT_GET_SUBSTRING_START_FROM_START'], 'FROM_START'],
      [Blockly.Msg['TEXT_GET_SUBSTRING_START_FROM_END'], 'FROM_END'],
      [Blockly.Msg['TEXT_GET_SUBSTRING_START_FIRST'], 'FIRST']
    ];
    this['WHERE_OPTIONS_2'] = [
      [Blockly.Msg['TEXT_GET_SUBSTRING_END_FROM_START'], 'FROM_START'],
      [Blockly.Msg['TEXT_GET_SUBSTRING_END_FROM_END'], 'FROM_END'],
      [Blockly.Msg['TEXT_GET_SUBSTRING_END_LAST'], 'LAST']
    ];
    this.setHelpUrl(Blockly.Msg['TEXT_GET_SUBSTRING_HELPURL']);
    this.setStyle('text_blocks');
    this.appendValueInput('STRING')
        .setCheck('String')
        .appendField(Blockly.Msg['TEXT_GET_SUBSTRING_INPUT_IN_TEXT']);
    this.appendDummyInput('AT1');
    this.appendDummyInput('AT2');
    if (Blockly.Msg['TEXT_GET_SUBSTRING_TAIL']) {
      this.appendDummyInput('TAIL')
          .appendField(Blockly.Msg['TEXT_GET_SUBSTRING_TAIL']);
    }
    this.setInputsInline(true);
    this.setOutput(true, 'String');
    this.updateAt_(1, true);
    this.updateAt_(2, true);
    this.setTooltip(Blockly.Msg['TEXT_GET_SUBSTRING_TOOLTIP']);
  },
  /**
   * Create XML to represent whether there are 'AT' inputs.
   * @return {!Element} XML storage element.
   * @this {Blockly.Block}
   */
  mutationToDom: function() {
    var container = Blockly.utils.xml.createElement('mutation');
    var isAt1 = this.getInput('AT1').type == Blockly.INPUT_VALUE;
    container.setAttribute('at1', isAt1);
    var isAt2 = this.getInput('AT2').type == Blockly.INPUT_VALUE;
    container.setAttribute('at2', isAt2);
    return container;
  },
  /**
   * Parse XML to restore the 'AT' inputs.
   * @param {!Element} xmlElement XML storage element.
   * @this {Blockly.Block}
   */
  domToMutation: function(xmlElement) {
    var isAt1 = (xmlElement.getAttribute('at1') == 'true');
    var isAt2 = (xmlElement.getAttribute('at2') == 'true');
    this.updateAt_(1, isAt1);
    this.updateAt_(2, isAt2);
  },
  /**
   * Create or delete an input for a numeric index.
   * This block has two such inputs, independent of each other.
   * @param {number} n Specify first or second input (1 or 2).
   * @param {boolean} isAt True if the input should exist.
   * @private
   * @this {Blockly.Block}
   */
  updateAt_: function(n, isAt) {
    // Create or delete an input for the numeric index.
    // Destroy old 'AT' and 'ORDINAL' inputs.
    this.removeInput('AT' + n);
    this.removeInput('ORDINAL' + n, true);
    // Create either a value 'AT' input or a dummy input.
    if (isAt) {
      this.appendValueInput('AT' + n).setCheck('Number');
      if (Blockly.Msg['ORDINAL_NUMBER_SUFFIX']) {
        this.appendDummyInput('ORDINAL' + n)
            .appendField(Blockly.Msg['ORDINAL_NUMBER_SUFFIX']);
      }
    } else {
      this.appendDummyInput('AT' + n);
    }
    // Move tail, if present, to end of block.
    if (n == 2 && Blockly.Msg['TEXT_GET_SUBSTRING_TAIL']) {
      this.removeInput('TAIL', true);
      this.appendDummyInput('TAIL')
          .appendField(Blockly.Msg['TEXT_GET_SUBSTRING_TAIL']);
    }
    var menu = new Blockly.FieldDropdown(this['WHERE_OPTIONS_' + n],
        function(value) {
          var newAt = (value == 'FROM_START') || (value == 'FROM_END');
          // The 'isAt' variable is available due to this function being a
          // closure.
          if (newAt != isAt) {
            var block = this.getSourceBlock();
            block.updateAt_(n, newAt);
            // This menu has been destroyed and replaced.
            // Update the replacement.
            block.setFieldValue(value, 'WHERE' + n);
            return null;
          }
          return undefined;
        });

    this.getInput('AT' + n)
        .appendField(menu, 'WHERE' + n);
    if (n == 1) {
      this.moveInputBefore('AT1', 'AT2');
      if (this.getInput('ORDINAL1')) {
        this.moveInputBefore('ORDINAL1', 'AT2');
      }
    }
  }
};

Blockly.Blocks['text_changeCase'] = {
  /**
   * Block for changing capitalization.
   * @this {Blockly.Block}
   */
  init: function() {
    var OPERATORS = [
      [Blockly.Msg['TEXT_CHANGECASE_OPERATOR_UPPERCASE'], 'UPPERCASE'],
      [Blockly.Msg['TEXT_CHANGECASE_OPERATOR_LOWERCASE'], 'LOWERCASE'],
      [Blockly.Msg['TEXT_CHANGECASE_OPERATOR_TITLECASE'], 'TITLECASE']
    ];
    this.setHelpUrl(Blockly.Msg['TEXT_CHANGECASE_HELPURL']);
    this.setStyle('text_blocks');
    this.appendValueInput('TEXT')
        .setCheck('String')
        .appendField(new Blockly.FieldDropdown(OPERATORS), 'CASE');
    this.setOutput(true, 'String');
    this.setTooltip(Blockly.Msg['TEXT_CHANGECASE_TOOLTIP']);
  }
};

Blockly.Blocks['text_trim'] = {
  /**
   * Block for trimming spaces.
   * @this {Blockly.Block}
   */
  init: function() {
    var OPERATORS = [
      [Blockly.Msg['TEXT_TRIM_OPERATOR_BOTH'], 'BOTH'],
      [Blockly.Msg['TEXT_TRIM_OPERATOR_LEFT'], 'LEFT'],
      [Blockly.Msg['TEXT_TRIM_OPERATOR_RIGHT'], 'RIGHT']
    ];
    this.setHelpUrl(Blockly.Msg['TEXT_TRIM_HELPURL']);
    this.setStyle('text_blocks');
    this.appendValueInput('TEXT')
        .setCheck('String')
        .appendField(new Blockly.FieldDropdown(OPERATORS), 'MODE');
    this.setOutput(true, 'String');
    this.setTooltip(Blockly.Msg['TEXT_TRIM_TOOLTIP']);
  }
};

Blockly.Blocks['text_print'] = {
  /**
   * Block for print statement.
   * @this {Blockly.Block}
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg['TEXT_PRINT_TITLE'],
      "args0": [
        {
          "type": "input_value",
          "name": "TEXT"
        }
      ],
      "previousStatement": null,
      "nextStatement": null,
      "style": "text_blocks",
      "tooltip": Blockly.Msg['TEXT_PRINT_TOOLTIP'],
      "helpUrl": Blockly.Msg['TEXT_PRINT_HELPURL']
    });
  }
};

Blockly.Blocks['text_prompt_ext'] = {
  /**
   * Block for prompt function (external message).
   * @this {Blockly.Block}
   */
  init: function() {
    var TYPES = [
      [Blockly.Msg['TEXT_PROMPT_TYPE_TEXT'], 'TEXT'],
      [Blockly.Msg['TEXT_PROMPT_TYPE_NUMBER'], 'NUMBER']
    ];
    this.setHelpUrl(Blockly.Msg['TEXT_PROMPT_HELPURL']);
    this.setStyle('text_blocks');
    // Assign 'this' to a variable for use in the closures below.
    var thisBlock = this;
    var dropdown = new Blockly.FieldDropdown(TYPES, function(newOp) {
      thisBlock.updateType_(newOp);
    });
    this.appendValueInput('TEXT')
        .appendField(dropdown, 'TYPE');
    this.setOutput(true, 'String');
    this.setTooltip(function() {
      return (thisBlock.getFieldValue('TYPE') == 'TEXT') ?
          Blockly.Msg['TEXT_PROMPT_TOOLTIP_TEXT'] :
          Blockly.Msg['TEXT_PROMPT_TOOLTIP_NUMBER'];
    });
  },
  /**
   * Modify this block to have the correct output type.
   * @param {string} newOp Either 'TEXT' or 'NUMBER'.
   * @private
   * @this {Blockly.Block}
   */
  updateType_: function(newOp) {
    this.outputConnection.setCheck(newOp == 'NUMBER' ? 'Number' : 'String');
  },
  /**
   * Create XML to represent the output type.
   * @return {!Element} XML storage element.
   * @this {Blockly.Block}
   */
  mutationToDom: function() {
    var container = Blockly.utils.xml.createElement('mutation');
    container.setAttribute('type', this.getFieldValue('TYPE'));
    return container;
  },
  /**
   * Parse XML to restore the output type.
   * @param {!Element} xmlElement XML storage element.
   * @this {Blockly.Block}
   */
  domToMutation: function(xmlElement) {
    this.updateType_(xmlElement.getAttribute('type'));
  }
};

Blockly.Blocks['text_prompt'] = {
  /**
   * Block for prompt function (internal message).
   * The 'text_prompt_ext' block is preferred as it is more flexible.
   * @this {Blockly.Block}
   */
  init: function() {
    this.mixin(Blockly.Constants.Text.QUOTE_IMAGE_MIXIN);
    var TYPES = [
      [Blockly.Msg['TEXT_PROMPT_TYPE_TEXT'], 'TEXT'],
      [Blockly.Msg['TEXT_PROMPT_TYPE_NUMBER'], 'NUMBER']
    ];

    // Assign 'this' to a variable for use in the closures below.
    var thisBlock = this;
    this.setHelpUrl(Blockly.Msg['TEXT_PROMPT_HELPURL']);
    this.setStyle('text_blocks');
    var dropdown = new Blockly.FieldDropdown(TYPES, function(newOp) {
      thisBlock.updateType_(newOp);
    });
    this.appendDummyInput()
        .appendField(dropdown, 'TYPE')
        .appendField(this.newQuote_(true))
        .appendField(new Blockly.FieldTextInput(''), 'TEXT')
        .appendField(this.newQuote_(false));
    this.setOutput(true, 'String');
    this.setTooltip(function() {
      return (thisBlock.getFieldValue('TYPE') == 'TEXT') ?
          Blockly.Msg['TEXT_PROMPT_TOOLTIP_TEXT'] :
          Blockly.Msg['TEXT_PROMPT_TOOLTIP_NUMBER'];
    });
  },
  updateType_: Blockly.Blocks['text_prompt_ext'].updateType_,
  mutationToDom: Blockly.Blocks['text_prompt_ext'].mutationToDom,
  domToMutation: Blockly.Blocks['text_prompt_ext'].domToMutation
};

Blockly.Blocks['text_count'] = {
  /**
   * Block for counting how many times one string appears within another string.
   * @this {Blockly.Block}
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg['TEXT_COUNT_MESSAGE0'],
      "args0": [
        {
          "type": "input_value",
          "name": "SUB",
          "check": "String"
        },
        {
          "type": "input_value",
          "name": "TEXT",
          "check": "String"
        }
      ],
      "output": "Number",
      "inputsInline": true,
      "style": "text_blocks",
      "tooltip": Blockly.Msg['TEXT_COUNT_TOOLTIP'],
      "helpUrl": Blockly.Msg['TEXT_COUNT_HELPURL']
    });
  }
};

Blockly.Blocks['text_replace'] = {
  /**
   * Block for replacing one string with another in the text.
   * @this {Blockly.Block}
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg['TEXT_REPLACE_MESSAGE0'],
      "args0": [
        {
          "type": "input_value",
          "name": "FROM",
          "check": "String"
        },
        {
          "type": "input_value",
          "name": "TO",
          "check": "String"
        },
        {
          "type": "input_value",
          "name": "TEXT",
          "check": "String"
        }
      ],
      "output": "String",
      "inputsInline": true,
      "style": "text_blocks",
      "tooltip": Blockly.Msg['TEXT_REPLACE_TOOLTIP'],
      "helpUrl": Blockly.Msg['TEXT_REPLACE_HELPURL']
    });
  }
};

Blockly.Blocks['text_reverse'] = {
  /**
   * Block for reversing a string.
   * @this {Blockly.Block}
   */
  init: function() {
    this.jsonInit({
      "message0": Blockly.Msg['TEXT_REVERSE_MESSAGE0'],
      "args0": [
        {
          "type": "input_value",
          "name": "TEXT",
          "check": "String"
        }
      ],
      "output": "String",
      "inputsInline": true,
      "style": "text_blocks",
      "tooltip": Blockly.Msg['TEXT_REVERSE_TOOLTIP'],
      "helpUrl": Blockly.Msg['TEXT_REVERSE_HELPURL']
    });
  }
};

/**
 *
 * @mixin
 * @package
 * @readonly
 */
Blockly.Constants.Text.QUOTE_IMAGE_MIXIN = {
  /**
   * Image data URI of an LTR opening double quote (same as RTL closing double quote).
   * @readonly
   */
  QUOTE_IMAGE_LEFT_DATAURI:
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAKCAQAAAAqJXdxAAAA' +
    'n0lEQVQI1z3OMa5BURSF4f/cQhAKjUQhuQmFNwGJEUi0RKN5rU7FHKhpjEH3TEMtkdBSCY' +
    '1EIv8r7nFX9e29V7EBAOvu7RPjwmWGH/VuF8CyN9/OAdvqIXYLvtRaNjx9mMTDyo+NjAN1' +
    'HNcl9ZQ5oQMM3dgDUqDo1l8DzvwmtZN7mnD+PkmLa+4mhrxVA9fRowBWmVBhFy5gYEjKMf' +
    'z9AylsaRRgGzvZAAAAAElFTkSuQmCC',
  /**
   * Image data URI of an LTR closing double quote (same as RTL opening double quote).
   * @readonly
   */
  QUOTE_IMAGE_RIGHT_DATAURI:
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAKCAQAAAAqJXdxAAAA' +
    'qUlEQVQI1z3KvUpCcRiA8ef9E4JNHhI0aFEacm1o0BsI0Slx8wa8gLauoDnoBhq7DcfWhg' +
    'gONDmJJgqCPA7neJ7p934EOOKOnM8Q7PDElo/4x4lFb2DmuUjcUzS3URnGib9qaPNbuXvB' +
    'O3sGPHJDRG6fGVdMSeWDP2q99FQdFrz26Gu5Tq7dFMzUvbXy8KXeAj57cOklgA+u1B5Aos' +
    'lLtGIHQMaCVnwDnADZIFIrXsoXrgAAAABJRU5ErkJggg==',
  /**
   * Pixel width of QUOTE_IMAGE_LEFT_DATAURI and QUOTE_IMAGE_RIGHT_DATAURI.
   * @readonly
   */
  QUOTE_IMAGE_WIDTH: 12,
  /**
   * Pixel height of QUOTE_IMAGE_LEFT_DATAURI and QUOTE_IMAGE_RIGHT_DATAURI.
   * @readonly
   */
  QUOTE_IMAGE_HEIGHT: 12,

  /**
   * Inserts appropriate quote images before and after the named field.
   * @param {string} fieldName The name of the field to wrap with quotes.
   * @this {Blockly.Block}
   */
  quoteField_: function(fieldName) {
    for (var i = 0, input; (input = this.inputList[i]); i++) {
      for (var j = 0, field; (field = input.fieldRow[j]); j++) {
        if (fieldName == field.name) {
          input.insertFieldAt(j, this.newQuote_(true));
          input.insertFieldAt(j + 2, this.newQuote_(false));
          return;
        }
      }
    }
    console.warn('field named "' + fieldName + '" not found in ' + this.toDevString());
  },

  /**
   * A helper function that generates a FieldImage of an opening or
   * closing double quote. The selected quote will be adapted for RTL blocks.
   * @param {boolean} open If the image should be open quote (“ in LTR).
   *                       Otherwise, a closing quote is used (” in LTR).
   * @return {!Blockly.FieldImage} The new field.
   * @this {Blockly.Block}
   */
  newQuote_: function(open) {
    var isLeft = this.RTL ? !open : open;
    var dataUri = isLeft ?
      this.QUOTE_IMAGE_LEFT_DATAURI :
      this.QUOTE_IMAGE_RIGHT_DATAURI;
    return new Blockly.FieldImage(
        dataUri,
        this.QUOTE_IMAGE_WIDTH,
        this.QUOTE_IMAGE_HEIGHT,
        isLeft ? '\u201C' : '\u201D');
  }
};

/**
 * Wraps TEXT field with images of double quote characters.
 * @this {Blockly.Block}
 */
Blockly.Constants.Text.TEXT_QUOTES_EXTENSION = function() {
  this.mixin(Blockly.Constants.Text.QUOTE_IMAGE_MIXIN);
  this.quoteField_('TEXT');
};


// Update the tooltip of 'text_append' block to reference the variable.
Blockly.Extensions.register('text_append_tooltip',
    Blockly.Extensions.buildTooltipWithFieldText(
        '%{BKY_TEXT_APPEND_TOOLTIP}', 'VAR'));

/**
 * Update the tooltip of 'text_append' block to reference the variable.
 * @this {Blockly.Block}
 */
Blockly.Constants.Text.TEXT_INDEXOF_TOOLTIP_EXTENSION = function() {
  // Assign 'this' to a variable for use in the tooltip closure below.
  var thisBlock = this;
  this.setTooltip(function() {
    return Blockly.Msg['TEXT_INDEXOF_TOOLTIP'].replace('%1',
        thisBlock.workspace.options.oneBasedIndex ? '0' : '-1');
  });
};

/**
 * Mixin for mutator functions in the 'text_charAt_mutator' extension.
 * @mixin
 * @augments Blockly.Block
 * @package
 */
Blockly.Constants.Text.TEXT_CHARAT_MUTATOR_MIXIN = {
  /**
   * Create XML to represent whether there is an 'AT' input.
   * @return {!Element} XML storage element.
   * @this {Blockly.Block}
   */
  mutationToDom: function() {
    var container = Blockly.utils.xml.createElement('mutation');
    container.setAttribute('at', !!this.isAt_);
    return container;
  },
  /**
   * Parse XML to restore the 'AT' input.
   * @param {!Element} xmlElement XML storage element.
   * @this {Blockly.Block}
   */
  domToMutation: function(xmlElement) {
    // Note: Until January 2013 this block did not have mutations,
    // so 'at' defaults to true.
    var isAt = (xmlElement.getAttribute('at') != 'false');
    this.updateAt_(isAt);
  },
  /**
   * Create or delete an input for the numeric index.
   * @param {boolean} isAt True if the input should exist.
   * @private
   * @this {Blockly.Block}
   */
  updateAt_: function(isAt) {
    // Destroy old 'AT' and 'ORDINAL' inputs.
    this.removeInput('AT', true);
    this.removeInput('ORDINAL', true);
    // Create either a value 'AT' input or a dummy input.
    if (isAt) {
      this.appendValueInput('AT').setCheck('Number');
      if (Blockly.Msg['ORDINAL_NUMBER_SUFFIX']) {
        this.appendDummyInput('ORDINAL')
            .appendField(Blockly.Msg['ORDINAL_NUMBER_SUFFIX']);
      }
    }
    if (Blockly.Msg['TEXT_CHARAT_TAIL']) {
      this.removeInput('TAIL', true);
      this.appendDummyInput('TAIL')
          .appendField(Blockly.Msg['TEXT_CHARAT_TAIL']);
    }

    this.isAt_ = isAt;
  }
};

/**
 * Does the initial mutator update of text_charAt and adds the tooltip
 * @this {Blockly.Block}
 */
Blockly.Constants.Text.TEXT_CHARAT_EXTENSION = function() {
  var dropdown = this.getField('WHERE');
  dropdown.setValidator(function(value) {
    var newAt = (value == 'FROM_START') || (value == 'FROM_END');
    if (newAt != this.isAt_) {
      var block = this.getSourceBlock();
      block.updateAt_(newAt);
    }
  });
  this.updateAt_(true);
  // Assign 'this' to a variable for use in the tooltip closure below.
  var thisBlock = this;
  this.setTooltip(function() {
    var where = thisBlock.getFieldValue('WHERE');
    var tooltip = Blockly.Msg['TEXT_CHARAT_TOOLTIP'];
    if (where == 'FROM_START' || where == 'FROM_END') {
      var msg = (where == 'FROM_START') ?
          Blockly.Msg['LISTS_INDEX_FROM_START_TOOLTIP'] :
          Blockly.Msg['LISTS_INDEX_FROM_END_TOOLTIP'];
      if (msg) {
        tooltip += '  ' + msg.replace('%1',
            thisBlock.workspace.options.oneBasedIndex ? '#1' : '#0');
      }
    }
    return tooltip;
  });
};

Blockly.Extensions.register('text_indexOf_tooltip',
    Blockly.Constants.Text.TEXT_INDEXOF_TOOLTIP_EXTENSION);

Blockly.Extensions.register('text_quotes',
    Blockly.Constants.Text.TEXT_QUOTES_EXTENSION);
    
var textJoinMutator = {
  
  domToMutation: function(xmlElement) {
    const targetCount = parseInt(xmlElement.getAttribute('items'), 10);
    console.log(this.inputList);
    for (var i = 2; i < targetCount; i++) {
      this.appendValueInput('ADD' + (this.inputCounter++));
    }
    this.itemCount_ = targetCount;
  },
  
  mutationToDom: function() {
    const container = Blockly.utils.xml.createElement('mutation');
    container.setAttribute('items', this.itemCount_);
    return container;
  },
  
  itemCount_: 0,
  
  inputCounter: 2,
  
  finalizeConnections: function() {
    if (this.inputList.length > 2) {
      var toRemove = [];
      for (var i = 0; i < this.inputList.length; i++) {
        var targetConnection = this.inputList[i].connection.targetConnection;
        if (!targetConnection) {
          toRemove.push(this.inputList[i].name);
        }
      }
      if (this.inputList.length - toRemove.length < 2) {
        // Always show at least two inputs
        toRemove = toRemove.slice(2);
      }
      for (i = 0; i < toRemove.length; i++) {
        this.removeInput(toRemove[i]);
      }
      // The first input should have the block text. If we removed the first input,
      // add the block text to the new first input.
      if (this.inputList[0].fieldRow.length == 0) {
        this.inputList[0].appendField(Blockly.Msg['TEXT_JOIN_TITLE_CREATEWITH']);
      }
    }
    
    this.itemCount_ = this.inputList.length;
  },
  
  onPendingConnection: function(connection) {
    if (connection.targetConnection) {
      var isLastConnection = this.inputList[this.inputList.length - 1].connection == connection;
      if (isLastConnection) {
        this.appendValueInput('ADD' + (this.inputCounter++));
      } else {
        var connectionIndex;
        for (var i = 0; i < this.inputList.length; i++) {
          if (this.inputList[i].connection == connection) {
            connectionIndex = i;
          }
        }
        var nextInput = this.inputList[connectionIndex + 1];
        var nextConnection = nextInput && nextInput.connection.targetConnection;
        if (nextConnection && !nextConnection.sourceBlock_.isInsertionMarker()) {
          this.appendValueInput('ADD' + (this.inputCounter++));
          this.moveNumberedInputBefore(this.inputList.length - 1, connectionIndex + 1);
        }
      }
    }
  }
}

Blockly.Extensions.registerMutator("jit_connection_mutator", textJoinMutator);

Blockly.Extensions.registerMutator('text_charAt_mutator',
    Blockly.Constants.Text.TEXT_CHARAT_MUTATOR_MIXIN,
    Blockly.Constants.Text.TEXT_CHARAT_EXTENSION);
