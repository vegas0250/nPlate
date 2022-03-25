function nPlate (elem, config) {

    this.buildControl = function() {
        
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
        nPlatePaginatorContent.innerHTML = '1';

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

        for (i in this.config.columns) {
            var nPlateSettingContextItemInput = document.createElement('input');
            nPlateSettingContextItemInput.setAttribute('type', 'checkbox');

            var nPlateSettingContextItem = document.createElement('div');
            nPlateSettingContextItem.setAttribute('class', 'n-plate__context-item');
            nPlateSettingContextItem.innerHTML = this.config.columns[i];

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
        
        console.log('control');
    }

    this.buildTable = function() {

        var nPlateWorkflow = document.createElement('div');
        nPlateWorkflow.setAttribute('class', 'n-plate__workflow');

        var nPlateTable = document.createElement('table');
        nPlateTable.setAttribute('class', 'n-plate__table');

        var nPlateTableTHead = document.createElement('thead');
        var nPlateTableTHeadTr = document.createElement('tr');
        
        for (let i in this.config.columns) {
            var nPlateTableTHeadTh = document.createElement('th');
            var nPlateTableTHeadThDiv = document.createElement('div');
            var nPlateTableTHeadThInput = document.createElement('input');
            nPlateTableTHeadThInput.setAttribute('name', this.config.columns[i]);
            nPlateTableTHeadThInput.setAttribute('type', 'text');
            nPlateTableTHeadThInput.setAttribute('class', 'n-plate__filter');

            nPlateTableTHeadThDiv.innerHTML += this.config.columns[i];

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

        console.log('table');
    }

    this.buildRows = function() {
        console.log('rows');
    }

    this.load = function() {

        var requestData = {
            'table': this.config.table,
            'columns': this.config.columns,
            'page': 1,
            'limit': 10
        };

         

        var search = this.elem.querySelector('.n-plate__search');

        if (search.value) {
            requestData.search = search.value;
        }

        var filters = this.elem.querySelectorAll('.n-plate__filter');

        if (filters.length) {
            var filterData = {};
            for(i in filters) {
                if (filters[i].value) {
                    filterData[filters[i].getAttribute('name')] = filters[i].value;
                }
            }

            if (Object.keys(filterData).length) {
                requestData['filters'] = filterData;
            }
        }

        var requestDataQuery = [];

        for(i in requestData) {
            if (i == 'columns') {
                var columns = [];
                for(j in requestData[i]) {
                    columns.push('columns[]='+requestData[i][j]);
                    
                }
                requestDataQuery.push(columns.join('&'));
                continue;
            }

            if (i == 'filters') {
                requestDataQuery.push(Object.keys(requestData[i]).map(key => 'filters['+key+']' + '=' + requestData[i][key]).join('&'));
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

                for(i in data.rows) {

                    var nPlateTableTBodyTr = document.createElement('tr');

                    for(j in this.config.columns) {
                        var nPlateTableTBodyTd = document.createElement('td');
                        nPlateTableTBodyTd.innerHTML = data.rows[i][this.config.columns[j]];

                        nPlateTableTBodyTr.appendChild(nPlateTableTBodyTd);
                    }
                    
                    tbody.appendChild(nPlateTableTBodyTr);

                }
            })
        ;
        
        
    }

    // start 
    console.log({'this': this});
    
    this.elem = document.querySelector(elem);
    this.config = config;

    this.buildControl();
    this.buildTable();
    this.buildRows();

    this.elem.querySelectorAll('.n-plate__filter').forEach(filter => 
        filter.addEventListener('keypress', (e) => {
            if (e.key == 'Enter') {
                this.load();
            }
        })
    )

    this.elem.querySelector('.n-plate__search').addEventListener('keypress', (e) => {
        if (e.key == 'Enter') {
            this.load();
        }
    })

    this.elem.querySelector('.n-plate__reload').addEventListener('click', () => {
        this.load();
    });

    


    /*
    {
        'filter': 1,
        'search': 1,
        'page': 1,
        'order': null,
        'direction': null,
        'size': 10
    }
    */
}