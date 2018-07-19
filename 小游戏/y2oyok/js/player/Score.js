//计分器类

import {DataStore} from "../base/DataStore.js";

export class Score {

    constructor() {
        this.ctx = DataStore.getInstance().ctx;
        this.scoreNumber = 0;
        //因为canvas刷新的很快，所以需要一个变量控制加分，只加一次
        this.isScore = true;
    }

    draw() {
        this.ctx.font = '25px Arial';
        this.ctx.fillStyle = '#ffcbeb';
        this.ctx.fillText(
            this.scoreNumber,
            DataStore.getInstance().canvas.width / 2,
            DataStore.getInstance().canvas.height / 18,
            1000
        );
    }
}