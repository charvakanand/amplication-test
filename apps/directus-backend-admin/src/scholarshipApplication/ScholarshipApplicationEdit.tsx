import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  BooleanInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { EvaluationTitle } from "../evaluation/EvaluationTitle";
import { ScholarshipTitle } from "../scholarship/ScholarshipTitle";
import { StudentTitle } from "../student/StudentTitle";

export const ScholarshipApplicationEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput source="evaluations" reference="Evaluation">
          <SelectArrayInput
            optionText={EvaluationTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <BooleanInput label="isDraft" source="isDraft" />
        <div />
        <ReferenceInput
          source="scholarship.id"
          reference="Scholarship"
          label="Scholarship"
        >
          <SelectInput optionText={ScholarshipTitle} />
        </ReferenceInput>
        <SelectInput
          source="status"
          label="status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <ReferenceInput source="student.id" reference="Student" label="Student">
          <SelectInput optionText={StudentTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
