import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  BooleanField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { SCHOLARSHIP_TITLE_FIELD } from "./ScholarshipTitle";
import { STUDENT_TITLE_FIELD } from "../student/StudentTitle";
import { SCHOLARSHIPPROVIDER_TITLE_FIELD } from "../scholarshipProvider/ScholarshipProviderTitle";

export const ScholarshipShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <TextField label="ID" source="id" />
        <BooleanField label="isPublished" source="isPublished" />
        <ReferenceField
          label="ScholarshipProvider"
          source="scholarshipprovider.id"
          reference="ScholarshipProvider"
        >
          <TextField source={SCHOLARSHIPPROVIDER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ShortlistingStage" source="shortlistingStage" />
        <TextField label="title" source="title" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="ScholarshipApplication"
          target="scholarshipId"
          label="ScholarshipApplications"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <BooleanField label="isDraft" source="isDraft" />
            <TextField label="responses" source="responses" />
            <ReferenceField
              label="Scholarship"
              source="scholarship.id"
              reference="Scholarship"
            >
              <TextField source={SCHOLARSHIP_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="status" source="status" />
            <ReferenceField
              label="Student"
              source="student.id"
              reference="Student"
            >
              <TextField source={STUDENT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
