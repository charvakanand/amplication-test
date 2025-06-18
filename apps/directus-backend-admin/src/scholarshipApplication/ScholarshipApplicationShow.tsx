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

import { SCHOLARSHIPAPPLICATION_TITLE_FIELD } from "./ScholarshipApplicationTitle";
import { SCHOLARSHIP_TITLE_FIELD } from "../scholarship/ScholarshipTitle";
import { STUDENT_TITLE_FIELD } from "../student/StudentTitle";

export const ScholarshipApplicationShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceField label="Student" source="student.id" reference="Student">
          <TextField source={STUDENT_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Evaluation"
          target="scholarshipApplicationId"
          label="Evaluations"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField label="assessmentType" source="assessmentType" />
            <TextField label="comments" source="comments" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="evaluator" source="evaluator" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="ScholarshipApplication"
              source="scholarshipapplication.id"
              reference="ScholarshipApplication"
            >
              <TextField source={SCHOLARSHIPAPPLICATION_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="score" source="score" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
