import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { 
        id: 0,
        name: 'Example1',
        score: 20
      },
      { 
        id: 11, 
        name: 'Example2',
        score: 11
      },
      { 
        id: 12, 
        name: 'Example3',
        score: 12
      },
      { 
        id: 13, 
        name: 'Example4',
        score: 13 
      },
      { id: 14, 
        name: 'Example5',
        score: 14 
      },
      { 
        id: 15, 
        name: 'Example6',
        score: 16 
      },
      { 
        id: 16, 
        name: 'Example7',
        score: 17
      },
      { 
        id: 17, 
        name: 'Example8',
        score: 18
      },
    ];
    return {heroes};
  }
}
