import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  BooleanInput,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { ScholarshipApplicationTitle } from "../scholarshipApplication/ScholarshipApplicationTitle";
import { ScholarshipProviderTitle } from "../scholarshipProvider/ScholarshipProviderTitle";

export const ScholarshipCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <BooleanInput label="isPublished" source="isPublished" />
        <ReferenceArrayInput
          source="scholarshipApplications"
          reference="ScholarshipApplication"
        >
          <SelectArrayInput
            optionText={ScholarshipApplicationTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceInput
          source="scholarshipProvider.id"
          reference="ScholarshipProvider"
          label="ScholarshipProvider"
        >
          <SelectInput optionText={ScholarshipProviderTitle} />
        </ReferenceInput>
        <TextInput label="ShortlistingStage" source="shortlistingStage" />
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Create>
  );
};
