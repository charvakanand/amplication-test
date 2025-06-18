export type EligibilityCriteria = {
  academicBackground: string | null;
  createdAt: Date;
  createdBy: string | null;
  gender?: "Option1" | null;
  id: string;
  incomeBracket: string | null;
  maxAge: number | null;
  minAge: number | null;
  otherRequirements: string | null;
  updatedAt: Date;
};
