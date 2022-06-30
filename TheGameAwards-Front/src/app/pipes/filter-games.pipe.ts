import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterGames'
})
export class FilterGamesPipe implements PipeTransform {

  // transform(list: any[], filter:string = "") {
  //   const lowerCaseFilter: string = filter.toLowerCase().trim();

  //   const filteredList: any[] = list.filter((element: any) => {
  //     return element.title.toLowerCase().includes(lowerCaseFilter);
  //   });

  //   return filteredList
  // }

  transform(mObjects: any[], input: string) {
    if (!input) return mObjects;
    return mObjects.filter(val => this.filterBy(val, input));
  }

  private filterBy(
    mObject: { title: string; genre: string },
    search: string
  ) {
    const reduced = Object.keys(mObject)
      .reduce((prev, current) => this.reduceKeys(prev, current, mObject), "")
      .toLocaleLowerCase();
    return reduced.indexOf(search.toLocaleLowerCase()) > -1;
  }

  private reduceKeys(
    prev: string,
    current: string,
    mObject: any
  ): string {
    if (this.isProp(current)) {
      prev = `${prev}\$${mObject[current]}`;
    }
    return prev;
  }

  //Aquí validas que propiedades quieres que se filtren.
  private isProp(key: string): boolean {
    return key.includes("title") || key.includes("genre");
  }

}
