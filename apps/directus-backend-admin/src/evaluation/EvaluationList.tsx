import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { SCHOLARSHIPAPPLICATION_TITLE_FIELD } from "../scholarshipApplication/ScholarshipApplicationTitle";

export const EvaluationList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Evaluations"}
      perPage={50}
      pagination={<Pagination />}
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
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
