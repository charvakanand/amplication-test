import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const EligibilityCriteriaList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      title={"EligibilityCriteriaItems"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="academicBackground" source="academicBackground" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="createdBy" source="createdBy" />
        <TextField label="gender" source="gender" />
        <TextField label="ID" source="id" />
        <TextField label="incomeBracket" source="incomeBracket" />
        <TextField label="maxAge" source="maxAge" />
        <TextField label="minAge" source="minAge" />
        <TextField label="otherRequirements" source="otherRequirements" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
