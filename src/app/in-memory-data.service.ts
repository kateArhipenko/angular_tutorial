import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 0,  name: 'Example1' },
      { id: 11, name: 'Example2' },
      { id: 12, name: 'Example3' },
      { id: 13, name: 'Example4' },
      { id: 14, name: 'Example5' },
      { id: 15, name: 'Example6' },
      { id: 16, name: 'Example7' },
      { id: 17, name: 'Example8' },
      { id: 18, name: 'Example9' },
      { id: 19, name: 'Example10' },
      { id: 20, name: 'Example11' }
    ];
    return {heroes};
  }
}
