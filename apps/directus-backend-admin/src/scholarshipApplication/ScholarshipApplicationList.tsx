import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  BooleanField,
  ReferenceField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { SCHOLARSHIP_TITLE_FIELD } from "../scholarship/ScholarshipTitle";
import { STUDENT_TITLE_FIELD } from "../student/StudentTitle";

export const ScholarshipApplicationList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      title={"ScholarshipApplications"}
      perPage={50}
      pagination={<Pagination />}
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
        <ReferenceField label="Student" source="student.id" reference="Student">
          <TextField source={STUDENT_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
