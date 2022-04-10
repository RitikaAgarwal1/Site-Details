import { Component, OnInit } from '@angular/core';
import { AppService } from '../services/app.service';

@Component({
  selector: 'app-site-details',
  templateUrl: './site-details.component.html',
  styleUrls: ['./site-details.component.scss']
})
export class SiteDetailsComponent implements OnInit {

  header = ["Domain & Plan Name", "Storage", "Monthly Visitors", "Domains", "Status"];
  data: any;
  searchedKey: any;
  entryNumber = 10;
  asc: any;
  showModal: boolean = false;

  constructor(private service: AppService) { }

  ngOnInit() {
    this.fetchData();
  }

  //fetch domain details
  fetchData() {
    this.service.getSiteDetails().subscribe(response => {
      // console.log(response);
      this.data = response;
      this.getProgressWidth();
    });
  }

  getProgressWidth() {
    this.data.forEach((el: any) => {
      el['storageWidth'] = parseInt(el.usedStorage) + '%';
      el['visitorWidth'] = el.monthlyVisitor / el.monthlyVisitorCapacity * 100 + '%';
    });
  }

  renderClass(domainTag: any) {
    switch (domainTag) {
      case "Primary":
        return "primary";
      case "Staging":
        return "staging";
      case "Add On":
        return "addon";
      default:
        return "primary";
    }
  };

  renderBackgroundColor(domainTag: any) {
    let color;
    switch (domainTag) {
      case "Primary":
        return color = '#5b7cfd';
      case "Staging":
        return color = '#d563d5';
      case "Add On":
        return color = '#ffae33';
      default:
        return color = '#5b7cfd';
    }
  }

  //debouncing | search data with domain name

  searchData() {
    let arr: any[] = [];
    this.service.getSiteDetails().subscribe(response => {
      this.data = response;
      for (let i = 0; i < this.data.length; i++) {
        if (this.data[i].domain === this.searchedKey) {
          arr.push(this.data[i]);
        }
      }
      if (arr.length > 0) this.data = arr;
    });
  }

  debounce(fn: any, duration: number) {
    let timer: any;
    return () => {
      let self = this, args = arguments;
      clearTimeout(timer);
      timer = setTimeout(() => {
        fn.apply(self, args);
      }, duration)
    }
  }

  searchFunc = this.debounce(this.searchData, 1000);

  //sort with requested value
  sort(property: any) {
    let sortOrder = 1;
    this.asc = !this.asc;
    if (this.asc) {
      return function (a: any, b: any) {
        const result = (a[property] > b[property]) ? -1 : (a[property] < b[property]) ? 1 : 0;
        return result * sortOrder;
      }
    } else {
      return function (a: any, b: any) {
        const result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        return result * sortOrder;
      }
    }
  }

  sortFunc(property: any) {
    let sortBy;
    switch (property) {
      case "Domain & Plan Name":
        sortBy = 'domain'
        break;
      case "Storage":
        sortBy = 'usedStorage'
        break;
      case "Monthly Visitors":
        sortBy = 'monthlyVisitor'
        break;
      case "Domains":
        sortBy = 'domainTag'
        break;
      case "Status":
        sortBy = 'status'
        break;
      default:
        sortBy = 'domain'
    }

    this.data.sort(this.sort(sortBy));
  }

  close(status: boolean) {
    this.showModal = status;
  }

  refresh(status: boolean) {
    if (status){
      this.fetchData();
      this.showModal = false;
    }
  }
}
