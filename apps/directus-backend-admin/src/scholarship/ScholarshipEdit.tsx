import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  BooleanInput,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { ScholarshipApplicationTitle } from "../scholarshipApplication/ScholarshipApplicationTitle";
import { ScholarshipProviderTitle } from "../scholarshipProvider/ScholarshipProviderTitle";

export const ScholarshipEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
