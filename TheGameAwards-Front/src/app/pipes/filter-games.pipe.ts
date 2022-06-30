import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterGames'
})
export class FilterGamesPipe implements PipeTransform {

  transform(list: any[], filter:string = "") {
    const lowerCaseFilter: string = filter.toLowerCase().trim();

    const filteredList: any[] = list.filter((element: any) => {
      return element.title.toLowerCase().includes(lowerCaseFilter);
    });

    return filteredList
  }

}
