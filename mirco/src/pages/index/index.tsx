
import { container } from '@linkseeks/core';
import TestServiceImpl from '../../service/impl/TestServiceImpl';
import { TestService } from '../../service/TestService';

container.bind<TestService>('testService').to(TestServiceImpl);

function HomePage() {

  return (
    <>
      Home
    </>
  )

}

export default HomePage;