import { container } from "linkseeks-hooks";
import TestServiceImpl from "./service/impl/TestServiceImpl";
import { TestService } from "./service/TestService";

export default function initApp() {
  container?.bind<TestService>('testService').to(TestServiceImpl);
}