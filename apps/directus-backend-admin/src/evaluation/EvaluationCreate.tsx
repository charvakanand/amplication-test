import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  SelectInput,
  TextInput,
  ReferenceInput,
  NumberInput,
} from "react-admin";

import { ScholarshipApplicationTitle } from "../scholarshipApplication/ScholarshipApplicationTitle";

export const EvaluationCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <SelectInput
          source="assessmentType"
          label="assessmentType"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="comments" multiline source="comments" />
        <TextInput label="evaluator" source="evaluator" />
        <ReferenceInput
          source="scholarshipApplication.id"
          reference="ScholarshipApplication"
          label="ScholarshipApplication"
        >
          <SelectInput optionText={ScholarshipApplicationTitle} />
        </ReferenceInput>
        <NumberInput label="score" source="score" />
      </SimpleForm>
    </Create>
  );
};
