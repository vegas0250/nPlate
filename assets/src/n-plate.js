function nPlate (elem, config) {

    this.buildControl = function() {
        
        var nPlateControl = document.createElement('div');
        nPlateControl.setAttribute('class', 'n-plate__control');

        var nPlatePaginator = document.createElement('div');
        nPlatePaginator.setAttribute('class', 'n-plate__paginator');

        var nPlatePaginatorFirst = document.createElement('div');
        nPlatePaginatorFirst.setAttribute('class', 'n-plate__paginator-first');

        var nPlatePaginatorPrev = document.createElement('div');
        nPlatePaginatorPrev.setAttribute('class', 'n-plate__paginator-prev');

        var nPlatePaginatorContent = document.createElement('div');
        nPlatePaginatorContent.setAttribute('class', 'n-plate__paginator-content');

        var nPlatePaginatorNext = document.createElement('div');
        nPlatePaginatorNext.setAttribute('class', 'n-plate__paginator-next');

        var nPlatePaginatorLast = document.createElement('div');
        nPlatePaginatorLast.setAttribute('class', 'n-plate__paginator-last');

        var nPlateReload = document.createElement('div');
        nPlateReload.setAttribute('class', 'n-plate__reload');

        var nPlateSetting = document.createElement('div');
        nPlateSetting.setAttribute('class', 'n-plate__setting');

        nPlatePaginator.appendChild(nPlatePaginatorFirst);
        nPlatePaginator.appendChild(nPlatePaginatorPrev);
        nPlatePaginator.appendChild(nPlatePaginatorContent);
        nPlatePaginator.appendChild(nPlatePaginatorNext);
        nPlatePaginator.appendChild(nPlatePaginatorLast);

        nPlateControl.appendChild(nPlatePaginator);
        nPlateControl.appendChild(nPlateReload);
        nPlateControl.appendChild(nPlateSetting);

        this.elem.appendChild(nPlateControl);
        
        console.log('control');
    }

    this.buildTable = function() {

        console.log(this.config.columns);

        

        var nPlateTable = document.createElement('table');
        nPlateTable.setAttribute('class', 'n-plate__table');

        var nPlateTableTHead = document.createElement('thead');
        var nPlateTableTHeadTr = document.createElement('tr');
        

        for (let i in this.config.columns) {
            var nPlateTableTHeadTh = document.createElement('th');
            var nPlateTableTHeadThDiv = document.createElement('div');
            var nPlateTableTHeadThInput = document.createElement('input');

            nPlateTableTHeadThDiv.innerHTML += i;

            nPlateTableTHeadTh.appendChild(nPlateTableTHeadThDiv);
            nPlateTableTHeadTh.appendChild(nPlateTableTHeadThInput);
            nPlateTableTHeadTr.appendChild(nPlateTableTHeadTh);
        }

        var nPlateTableTBody = document.createElement('tbody');
        // var nPlateTableTBodyTr
        // var nPlateTableTBodyTd

        nPlateTableTHeadTr.appendChild(nPlateTableTHeadTh);
        nPlateTableTHead.appendChild(nPlateTableTHeadTr);

        nPlateTable.appendChild(nPlateTableTHead);
        nPlateTable.appendChild(nPlateTableTBody);

        this.elem.appendChild(nPlateTable);

        console.log('table');
    }

    this.buildRows = function() {
        console.log('rows');
    }

    this.load = function() {}

    this.elem = document.querySelector(elem);
    this.config = config;

    this.elem.setAttribute('data', JSON.stringify({
        'page': 1,
        'limit': 10
    }))

    console.log(this.elem);

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

    this.buildControl();
    this.buildTable();
    this.buildRows();

}