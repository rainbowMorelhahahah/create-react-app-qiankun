 import {injectable} from 'inversify';

 @injectable()
 export class TestServiceImpl {
  sendHollow(): string {
    return "Send Hollow";
  }
}

export default TestServiceImpl;