var List = new Vue({
el:'#page-list',
data: {
    cateIndex: 0,
    filterIndex: 0, 
    sortFlag: 0,
    cates: [
        '推荐','母婴','鞋包饰品','食品','数码家电','居家百货'
    ],
    filters:['综合排序','销量优先','价格'],
    goods: [
        { title: 'Beats EP头戴式耳机',type:4, price: 558, sales: 1072, path: 'http://img11.360buyimg.com/n1/s528x528_jfs/t3109/194/2435573156/46587/e0e867ac/57e10978N87220944.jpg!q70.jpg' },
        { title: '雀巢（Nestle）高钙成人奶粉',type:3, price: 60, sales: 2374, path: 'http://m.360buyimg.com/babel/jfs/t5197/28/400249159/97561/304ce550/58ff0dbeN88884779.jpg!q50.jpg.webp' },
        { title: '煎炒烹炸一锅多用', type:5,price: 216, sales: 556, path: 'http://gw.alicdn.com/tps/TB19OfQRXXXXXbmXXXXL6TaGpXX_760x760q90s150.jpg_.webp' },
        { title: 'ANNE KLEIN 潮流经典美式轻奢',type:2, price: 455, sales: 258, path: 'http://gw.alicdn.com/tps/TB1l5psQVXXXXcXaXXXL6TaGpXX_760x760q90s150.jpg_.webp' },
        { title: '乐高EV3机器人积木玩具',type:1, price: 3099, sales: 115, path: 'https://m.360buyimg.com/mobilecms/s357x357_jfs/t6490/168/1052550216/653858/9eef28d1/594922a8Nc3afa743.jpg!q50.jpg' },
        { title: '全球购 路易威登（Louis Vuitton）新款女士LV印花手袋 M41112',type:2, price: 1097, sales: 58, path: 'https://m.360buyimg.com/n1/s220x220_jfs/t1429/17/1007119837/464370/310392f4/55b5e5bfN75daf703.png!q70.jpg' },
        { title: 'Kindle Paperwhite3 黑色经典版电纸书',type:4, price: 1067, sales: 755, path: 'http://img12.360buyimg.com/n1/s528x528_jfs/t4954/76/635213328/51972/ec4a3c3c/58e5f717N4031d162.jpg!q70.jpg' },
        { title: 'DELSEY 男士双肩背包', type:2,price: 563, sales: 756, path: 'http://gw.alicdn.com/tps/LB1HL0mQVXXXXbzXVXXXXXXXXXX.png' },
        { title: '荷兰 天赋力 Herobaby 婴儿配方奶粉 4段 1岁以上700g',type:1, price: 189, sales: 1892, path: 'http://m.360buyimg.com/babel/s330x330_jfs/t4597/175/4364374663/125149/4fbbaf21/590d4f5aN0467dc26.jpg!q50.jpg.webp' },
        { title: '【全球购】越南acecook河粉牛肉河粉特产 速食即食方便面粉丝 牛肉河粉米粉65克*5袋',type:3, price: 43, sales: 2105, path: 'https://m.360buyimg.com/mobilecms/s357x357_jfs/t3169/228/5426689121/95568/d463e211/586dbf56N37fcd503.jpg!q50.jpg' },
        { title: '正品FENDI/芬迪女包钱包女长款 百搭真皮钱夹 女士小怪兽手拿包', type:2,price: 250, sales: 1278, path: 'http://img.alicdn.com/imgextra/i3/TB16avCQXXXXXcsXpXXXXXXXXXX_!!0-item_pic.jpg_400x400q60s30.jpg_.webp' },
    ],
    goodsList:[],
    
 },
methods: {
    changeCate: function (index) {
        this.filterIndex = 0;
        this.goodsList = [];
        this.cateIndex = index;
        if (index === 0)
        {
            this.goodsList = [...this.goods];
            this.sortBy(0);
            }
        this.goods.forEach(item => {
            if (item.type === index)
                this.goodsList.push(item);

        });
    },
    sortBy: function (index) {
        this.filterIndex = index;
        if (index === 0)
        {
            this.sortFlag = 0;
            this.goodsList.sort(({ sales: x, price: a }, { sales: y, price: b }) => (x / a) - (y / b));
        }
        else if (index === 1)
        {
            this.sortFlag = 0;
            this.goodsList.sort(({ sales: x }, { sales: y }) => y - x);
            }
        else if (index === 2)
        { this.sortFlag++;
            this.goodsList.sort(({ price: x }, { price: y }) => {
                if (this.sortFlag % 2 === 0)
                {
                    
                    return (y - x);
                }
                else
                    return (x - y);
            });}
    }
    },
created: function(){
    this.goodsList = [...this.goods];
    this.sortBy(0);
}
})

var Cart = new Vue({
    el: "#page-cart",
    data: {
        selectedPrice:0,
    }
})