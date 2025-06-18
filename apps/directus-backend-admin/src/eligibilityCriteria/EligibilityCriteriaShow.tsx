import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const EligibilityCriteriaShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="academicBackground" source="academicBackground" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="createdBy" source="createdBy" />
        <TextField label="gender" source="gender" />
        <TextField label="ID" source="id" />
        <TextField label="incomeBracket" source="incomeBracket" />
        <TextField label="maxAge" source="maxAge" />
        <TextField label="minAge" source="minAge" />
        <TextField label="otherRequirements" source="otherRequirements" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
