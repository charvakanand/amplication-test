import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { SCHOLARSHIPAPPLICATION_TITLE_FIELD } from "../scholarshipApplication/ScholarshipApplicationTitle";

export const EvaluationShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
