import {Customer} from "./customer.model";

export interface CurAccount {
  type:          string;
  id:            string;
  balance:       number;
  createdDate:   Date;
  status:        string;
  customerDTO:   Customer;
  overDraft:    number;


}
