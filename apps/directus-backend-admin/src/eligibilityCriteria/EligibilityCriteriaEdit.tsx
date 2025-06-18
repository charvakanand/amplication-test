import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  SelectInput,
  NumberInput,
} from "react-admin";

export const EligibilityCriteriaEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="academicBackground" source="academicBackground" />
        <TextInput label="createdBy" source="createdBy" />
        <SelectInput
          source="gender"
          label="gender"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="incomeBracket" source="incomeBracket" />
        <NumberInput step={1} label="maxAge" source="maxAge" />
        <NumberInput step={1} label="minAge" source="minAge" />
        <TextInput
          label="otherRequirements"
          multiline
          source="otherRequirements"
        />
      </SimpleForm>
    </Edit>
  );
};
