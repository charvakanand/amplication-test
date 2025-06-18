import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  BooleanField,
  ReferenceField,
} from "react-admin";

import { SCHOLARSHIP_TITLE_FIELD } from "../scholarship/ScholarshipTitle";
import { STUDENT_TITLE_FIELD } from "./StudentTitle";

export const StudentShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="email" source="email" />
        <TextField label="firstName" source="firstName" />
        <TextField label="ID" source="id" />
        <TextField label="kycDetails" source="kycDetails" />
        <TextField label="kycStatus" source="kycStatus" />
        <TextField label="lastName" source="lastName" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="ScholarshipApplication"
          target="studentId"
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
