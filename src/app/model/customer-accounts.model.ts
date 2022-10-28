export interface Account {
  type:          string;
  id:            string;
  balance:       number;
  createdDate:   Date;
  status:        string;
  customerDTO:   CustomerDTO;
  overDraft?:    number;
  interestRate?: number;
}

export interface CustomerDTO {
  id:    number;
  name:  string;
  email: string;
}
