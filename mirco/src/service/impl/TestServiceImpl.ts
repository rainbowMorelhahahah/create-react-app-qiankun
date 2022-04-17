 import {injectable} from 'inversify';

 @injectable()
 class TestServiceImpl {
  sendHollow(): string {
    return "Send Hollow";
  }
}

export default TestServiceImpl;