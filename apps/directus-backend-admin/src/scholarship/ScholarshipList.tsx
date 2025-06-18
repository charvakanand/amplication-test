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
import { SCHOLARSHIPPROVIDER_TITLE_FIELD } from "../scholarshipProvider/ScholarshipProviderTitle";

export const ScholarshipList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Scholarships"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
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
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
