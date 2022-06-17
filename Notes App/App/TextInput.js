import React from 'react';
import {
  FormLabel,
  FormInput,
  FormValidationMessage,
} from 'react-native-elements';
import {View} from 'react-native';

const TextInput = res => {
  const {
    value,
    onFocus,
    onChange,
    isValid,
    validatorMessage,
    required,
    showWarnings,
    placeholder,
    label,
    requiredPrefix,
    focusNext,
    onRef,
  } = res;

  const _required = required && requiredPrefix ? requiredPrefix : '';
  return (
    <View>
      <FormLabel>{`${_required}${label}`}</FormLabel>
      <FormInput
        onChangeText={onChange}
        placeholder={placeholder}
        defaultValue={isValid}
        value={value}
        ref={ref => {
          onRef(ref);
        }}
        onFocus={onFocus}
        onSubmitEditing={focusNext}
      />
      {showWarnings && (
        <FormValidationMessage>{validatorMessage}</FormValidationMessage>
      )}
    </View>
  );
};

export default TextInput;
