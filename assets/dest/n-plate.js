class nPlate {

    elem = null;

    config = {
      'url': '',
      'table': '',
      'columns': {},
      'page': 1,
      'limit': 10
    };

    constructor(elem, config = {}) {
      this.elem = document.querySelector(elem);

      this.config = Object.assign(this.config, config);

      for (let i in this.config.columns) {
        if (this.config.columns[i].label == undefined) {
          this.config.columns[i].label = i;
        }

        if (this.config.columns[i].visible == undefined) {
          this.config.columns[i].visible = true;
        }
      }

      this.configLoad();

      console.log(this.config);

      // this.configLoad();

      this.init();
    }

    configSave() {

      var config = {
        'limit': this.config.limit,
        'columns': this.config.columns
      }

      window.localStorage.setItem('nPlateConfig', JSON.stringify(config));
    }

    configLoad() {
      let loadingConfig = JSON.parse(window.localStorage.getItem('nPlateConfig'));
      this.config = Object.assign(this.config, loadingConfig);
    }

    buildControl() {
        
      var nPlateControl = document.createElement('div');
      nPlateControl.setAttribute('class', 'n-plate__control');

      var nPlatePaginator = document.createElement('div');
      nPlatePaginator.setAttribute('class', 'n-plate__paginator');

      var nPlatePaginatorFirst = document.createElement('div');
      nPlatePaginatorFirst.setAttribute('class', 'n-plate__paginator-first');
      
      var nPlatePaginatorFirstSvg = document.createElement('img');
      nPlatePaginatorFirstSvg.setAttribute('src', 'img/page-first.svg');
      
      var nPlatePaginatorPrev = document.createElement('div');
      nPlatePaginatorPrev.setAttribute('class', 'n-plate__paginator-prev');

      var nPlatePaginatorPrevSvg = document.createElement('img');
      nPlatePaginatorPrevSvg.setAttribute('src', 'img/angle-left.svg');

      var nPlatePaginatorContent = document.createElement('div');
      nPlatePaginatorContent.setAttribute('class', 'n-plate__paginator-content');
      nPlatePaginatorContent.innerHTML = ' ... ';

      var nPlatePaginatorNext = document.createElement('div');
      nPlatePaginatorNext.setAttribute('class', 'n-plate__paginator-next');

      var nPlatePaginatorNextSvg = document.createElement('img');
      nPlatePaginatorNextSvg.setAttribute('src', 'img/angle-right.svg');

      var nPlatePaginatorLast = document.createElement('div');
      nPlatePaginatorLast.setAttribute('class', 'n-plate__paginator-last');

      var nPlatePaginatorLastSvg = document.createElement('img');
      nPlatePaginatorLastSvg.setAttribute('src', 'img/page-last.svg');

      var nPlateReload = document.createElement('div');
      nPlateReload.setAttribute('class', 'n-plate__reload');

      var nPlateReloadSvg = document.createElement('img');
      nPlateReloadSvg.setAttribute('src', 'img/reload.svg');

      var nPlateLimit = document.createElement('select');
      nPlateLimit.setAttribute('class', 'n-plate__limit');

      var nPlateLimitOption10 = document.createElement('option');
      nPlateLimitOption10.setAttribute('value', 10);
      nPlateLimitOption10.innerHTML = 10;

      var nPlateLimitOption20 = document.createElement('option');
      nPlateLimitOption20.setAttribute('value', 20);
      nPlateLimitOption20.innerHTML = 20;

      var nPlateLimitOption50 = document.createElement('option');
      nPlateLimitOption50.setAttribute('value', 50);
      nPlateLimitOption50.innerHTML = 50;

      var nPlateLimitOption100 = document.createElement('option');
      nPlateLimitOption100.setAttribute('value', 100);
      nPlateLimitOption100.innerHTML = 100;

      var nPlateFinder = document.createElement('div');
      nPlateFinder.setAttribute('class', 'n-plate__finder');

      var nPlateSearch = document.createElement('input');
      nPlateSearch.setAttribute('class', 'n-plate__search');

      var nPlateSetting = document.createElement('div');
      nPlateSetting.setAttribute('class', 'n-plate__setting');

      var nPlateSettingSvg = document.createElement('img');
      nPlateSettingSvg.setAttribute('src', 'img/setting.svg');

      var nPlateSettingContext = document.createElement('div');
      nPlateSettingContext.setAttribute('class', 'n-plate__context');

      for (var i in this.config.columns) {
        var nPlateSettingContextItemInput = document.createElement('input');
        nPlateSettingContextItemInput.setAttribute('name', i);
        nPlateSettingContextItemInput.setAttribute('type', 'checkbox');
        nPlateSettingContextItemInput.setAttribute('class', 'n-plate__visible');

        if (this.config.columns[i].visible) {
          nPlateSettingContextItemInput.checked = true;
        } else {
          nPlateSettingContextItemInput.checked = false;
        }

        var nPlateSettingContextItem = document.createElement('div');
        nPlateSettingContextItem.setAttribute('class', 'n-plate__context-item');
        nPlateSettingContextItem.innerHTML = i;

        nPlateSettingContextItem.appendChild(nPlateSettingContextItemInput);
        nPlateSettingContext.appendChild(nPlateSettingContextItem);
      }

      nPlatePaginatorFirst.appendChild(nPlatePaginatorFirstSvg);
      nPlatePaginatorPrev.appendChild(nPlatePaginatorPrevSvg);
      nPlatePaginatorNext.appendChild(nPlatePaginatorNextSvg);
      nPlatePaginatorLast.appendChild(nPlatePaginatorLastSvg);

      nPlateLimit.appendChild(nPlateLimitOption10);
      nPlateLimit.appendChild(nPlateLimitOption20);
      nPlateLimit.appendChild(nPlateLimitOption50);
      nPlateLimit.appendChild(nPlateLimitOption100);

      nPlateReload.appendChild(nPlateReloadSvg);

      nPlateFinder.appendChild(nPlateSearch);

      nPlateSetting.appendChild(nPlateSettingSvg);
      nPlateSetting.appendChild(nPlateSettingContext);

      nPlatePaginator.appendChild(nPlatePaginatorFirst);
      nPlatePaginator.appendChild(nPlatePaginatorPrev);
      nPlatePaginator.appendChild(nPlatePaginatorContent);
      nPlatePaginator.appendChild(nPlatePaginatorNext);
      nPlatePaginator.appendChild(nPlatePaginatorLast);

      nPlateControl.appendChild(nPlatePaginator);
      nPlateControl.appendChild(nPlateLimit);
      nPlateControl.appendChild(nPlateReload);
      nPlateControl.appendChild(nPlateFinder);
      nPlateControl.appendChild(nPlateSetting);

      this.elem.appendChild(nPlateControl);
    }

    buildTable() {

      if (this.elem.querySelector('.n-plate__workflow')) {
        this.elem.removeChild(this.elem.querySelector('.n-plate__workflow'));
      }

      var nPlateWorkflow = document.createElement('div');
      nPlateWorkflow.setAttribute('class', 'n-plate__workflow');

      var nPlateTable = document.createElement('table');
      nPlateTable.setAttribute('class', 'n-plate__table');

      var nPlateTableTHead = document.createElement('thead');
      var nPlateTableTHeadTr = document.createElement('tr');
      
      for (let i in this.config.columns) {
        if (!this.config.columns[i].visible) continue;

        var nPlateTableTHeadTh = document.createElement('th');
        var nPlateTableTHeadThDiv = document.createElement('div');
        nPlateTableTHeadThDiv.setAttribute('name', i);
        nPlateTableTHeadThDiv.setAttribute('class', 'n-plate__label n-plate__sort');

        var nPlateTableTHeadThInput = document.createElement('input');
        nPlateTableTHeadThInput.setAttribute('name', i);
        nPlateTableTHeadThInput.setAttribute('type', 'text');
        nPlateTableTHeadThInput.setAttribute('class', 'n-plate__filter');

        nPlateTableTHeadThDiv.innerHTML += this.config.columns[i].label;

        nPlateTableTHeadTh.appendChild(nPlateTableTHeadThDiv);
        nPlateTableTHeadTh.appendChild(nPlateTableTHeadThInput);
        nPlateTableTHeadTr.appendChild(nPlateTableTHeadTh);
      }

      var nPlateTableTBody = document.createElement('tbody');

      nPlateTableTHeadTr.appendChild(nPlateTableTHeadTh);
      nPlateTableTHead.appendChild(nPlateTableTHeadTr);

      nPlateTable.appendChild(nPlateTableTHead);
      nPlateTable.appendChild(nPlateTableTBody);

      nPlateWorkflow.appendChild(nPlateTable);

      this.elem.appendChild(nPlateWorkflow);
    }

    request() {

      var requestData = {
        'table': this.config.table,
        'columns': this.config.columns,
        'page': this.config.page,
        'limit': this.config.limit
      };

      if (this.config.order) {
        requestData['order'] = this.config.order;
      }

      var search = this.elem.querySelector('.n-plate__search');

      if (search.value) {
          requestData.search = search.value;
      }

      var filters = this.elem.querySelectorAll('.n-plate__filter');

      if (filters.length) {
          var filterData = {};
          for(let i in filters) {
              if (filters[i].value) {
                  filterData[filters[i].getAttribute('name')] = filters[i].value;
              }
          }

          if (Object.keys(filterData).length) {
              requestData['filters'] = filterData;
          }
      }

      var requestDataQuery = [];

      for(let i in requestData) {
          if (i == 'columns') {
              var columns = [];

              for(let j in requestData[i]) {
                  columns.push('columns[]='+j);
              }
              requestDataQuery.push(columns.join('&'));
              continue;
          }

          if (i == 'filters') {
              requestDataQuery.push(Object.keys(requestData[i]).map(key => 'filters['+key+']' + '=' + requestData[i][key]).join('&'));
              continue;
          }

          if (i == 'order') {
            requestDataQuery.push('order[field]='+requestData[i].field);
            requestDataQuery.push('order[direction]='+requestData[i].direction);

            continue;
          }

          requestDataQuery.push(i+'='+requestData[i]);
      }

      const response = fetch(this.config.url+'?'+requestDataQuery.join('&'))
          .then((response) => {
              return response.json();
          })
          .then((data) => {
              console.log(data);

              var tbody = this.elem.querySelector('tbody');
              tbody.innerHTML = '';

              //console.log(this.config);
              this.config.count = data.count;

              for(let i in data.rows) {

                  var nPlateTableTBodyTr = document.createElement('tr');

                  for(let j in this.config.columns) {
                      var nPlateTableTBodyTd = document.createElement('td');
                      nPlateTableTBodyTd.innerHTML = data.rows[i][j];

                      nPlateTableTBodyTr.appendChild(nPlateTableTBodyTd);
                  }
                  
                  tbody.appendChild(nPlateTableTBodyTr);

              }

              this.configSave();
              this.displayParams();
          })
      ;

    }

    displayParams() {
      let 
        page = this.config.page == 1 ? 1 : (this.config.page - 1) * this.config.limit,
        limit = this.config.page == 1 ? this.config.limit : this.config.page * this.config.limit,
        count = '';

      if (this.config.count) {
        count += ' из '+this.config.count;
      }


      this.elem.querySelector('.n-plate__limit').value = this.config.limit;
      this.elem.querySelector('.n-plate__paginator-content').innerHTML = page + ' - ' + limit + count;
    }

    init() {
      this.buildControl();
      this.buildTable();
      this.request();

      this.elem.querySelectorAll('.n-plate__visible').forEach(item => {
        item.addEventListener('change', () => {
          this.elem.querySelectorAll('.n-plate__visible').forEach(item => {
            this.config.columns[item.getAttribute('name')]['visible'] = item.checked;
            this.configSave();
            this.buildTable();
          })
        })
      })

      this.elem.querySelector('.n-plate__reload').addEventListener('click', () => {
        this.request();
      });

      this.elem.querySelectorAll('.n-plate__filter').forEach(filter => 
          filter.addEventListener('keypress', (e) => {
              if (e.key == 'Enter') {
                  this.request();
              }
          })
      )

      this.elem.querySelector('.n-plate__search').addEventListener('keypress', (e) => {
          if (e.key == 'Enter') {
              this.request();
          }
      })

      this.elem.querySelector('.n-plate__paginator-first').addEventListener('click', () => {
        if (this.config.page != 1) {
          this.config.page = 1;
          this.request();
        }
      })

      this.elem.querySelector('.n-plate__paginator-prev').addEventListener('click', () => {
        if (this.config.page > 1) {
          this.config.page--;
          this.request();
        }
      })

      this.elem.querySelector('.n-plate__paginator-next').addEventListener('click', () => {
        this.config.page++;
        this.request();
      })

      this.elem.querySelector('.n-plate__paginator-last').addEventListener('click', () => {
          if (this.config.count) {
              this.config.page = Math.floor(this.config.count / this.config.limit);
              this.request();
          }
      })

      this.elem.querySelector('.n-plate__limit').addEventListener('change', (e) => {
        this.config.limit = parseInt(e.target.value);
        this.config.page = 1;
        this.request();
      })

      this.elem.querySelectorAll('.n-plate__sort').forEach((item) => {
        item.addEventListener('click', (e) => {

          let field = e.target.getAttribute('name');

          if (this.config.order == undefined) {
            this.config.order = {
              field: field,
              direction: 'asc',
            }
          } else {

            if (this.config.order.field == field) {
              if (this.config.order.direction == 'asc') {
                this.config.order = {
                  field: field,
                  direction: 'desc',
                }
              } else {
                delete this.config.order;
              }
            } else {
              this.config.order = {
                field: field,
                direction: 'asc',
              }
            }
          }

          this.request();
        })
      })
      

    }

  }