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
        {
            id:1001,
            title: 'Beats EP头戴式耳机',
            type: 4,
            price: 558,
            store:123,
            sales: 1072,
            path: 'http://img11.360buyimg.com/n1/s528x528_jfs/t3109/194/2435573156/46587/e0e867ac/57e10978N87220944.jpg!q70.jpg'
        },
        {
            id:1002,
            title: '雀巢（Nestle）高钙成人奶粉',
            type: 3,
            price: 60,
            sales: 2374,
            store:1235,
            path: 'http://m.360buyimg.com/babel/jfs/t5197/28/400249159/97561/304ce550/58ff0dbeN88884779.jpg!q50.jpg.webp'
        },
        {   id:1003,
            title: '煎炒烹炸一锅多用',
            type: 5,
            price: 216,
            sales: 556,
            store:1523,
            path: 'http://gw.alicdn.com/tps/TB19OfQRXXXXXbmXXXXL6TaGpXX_760x760q90s150.jpg_.webp'
        },
        {   id:1004,
            title: 'ANNE KLEIN 潮流经典美式轻奢',
            type: 2,
            price: 455,
            sales: 258,
            store:268,
            path: 'http://gw.alicdn.com/tps/TB1l5psQVXXXXcXaXXXL6TaGpXX_760x760q90s150.jpg_.webp'
        },
        {   id:1005,
            title: '乐高EV3机器人积木玩具',
            type: 1,
            price: 3099,
            sales: 115,
            store:851,
            path: 'https://m.360buyimg.com/mobilecms/s357x357_jfs/t6490/168/1052550216/653858/9eef28d1/594922a8Nc3afa743.jpg!q50.jpg'
        },
        {   id:1006,
            title: '全球购 路易威登（Louis Vuitton）新款女士LV印花手袋 M41112',
            type: 2,
            price: 1097,
            sales: 58,
            store:5,
            path: 'https://m.360buyimg.com/n1/s220x220_jfs/t1429/17/1007119837/464370/310392f4/55b5e5bfN75daf703.png!q70.jpg'
        },
        {   id:1007,
            title: 'Kindle Paperwhite3 黑色经典版电纸书',
            type: 4,
            price: 1067,
            sales: 755,
            store:12,
            path: 'http://img12.360buyimg.com/n1/s528x528_jfs/t4954/76/635213328/51972/ec4a3c3c/58e5f717N4031d162.jpg!q70.jpg'
        },
        {   id:1008,
            title: 'DELSEY 男士双肩背包',
            type: 2,
            price: 563,
            sales: 756,
            store:4872,
            path: 'http://gw.alicdn.com/tps/LB1HL0mQVXXXXbzXVXXXXXXXXXX.png'
        },
        {   id:1009,
            title: '荷兰 天赋力 Herobaby 婴儿配方奶粉 4段 1岁以上700g',
            type: 1,
            price: 189,
            sales: 1892,
            store:4545,
            path: 'http://m.360buyimg.com/babel/s330x330_jfs/t4597/175/4364374663/125149/4fbbaf21/590d4f5aN0467dc26.jpg!q50.jpg.webp'
        },
        {   id:1010,
            title: '【全球购】越南acecook河粉牛肉河粉特产 速食即食方便面粉丝 牛肉河粉米粉65克*5袋',
            type: 3,
            price: 43,
            sales: 2105,
            store:2546,
            path: 'https://m.360buyimg.com/mobilecms/s357x357_jfs/t3169/228/5426689121/95568/d463e211/586dbf56N37fcd503.jpg!q50.jpg'
        },
        {   id:1011,
            title: '正品FENDI/芬迪女包钱包女长款 百搭真皮钱夹 女士小怪兽手拿包',
            type: 2,
            price: 250,
            sales: 1278,
            store:54,
            path: 'http://img.alicdn.com/imgextra/i3/TB16avCQXXXXXcsXpXXXXXXXXXX_!!0-item_pic.jpg_400x400q60s30.jpg_.webp'
        },
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
    },
    addToCart(goods) {
        let added_index = Cart.cartList.findIndex(item => {
            return item.id === goods.id;
        })
        if (added_index === -1)
        {
            let index = Cart.cartList.length;
            Cart.cartList.push(goods);
            Cart.$set(Cart.cartList[index], "Qty", 1);
            Cart.$set(Cart.cartList[index], "Checked", true);
            Cart.checkedNum++;
            Cart.isAll();
        }
        else {
            let added_item = Cart.cartList[added_index];
            if (added_item.Qty < added_item.store)
                added_item.Qty++;
            else
                confirm('超出库存');
        }
        
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
        cartList: [],
        checkedNum: 0,
        allFlag: false,
        editFlag: false,
    },
    methods: {
        /* 编辑商品 */
        editGoods: function () {
            this.editFlag = !this.editFlag;  
        },
        /*
        遍历删除不能使用forEach，因为forEach会缓存数组length进行遍历，
        而遍历过程中进行的删除操作会改变原数组的length。
        而使用for遍历时，可以利用i--来处理原数组的length
        也可以用filter生成不被选中的数组
        */
        delGoods: function () {
        //     let cart = this.cartList;
        //     this.cartList = cart.filter(item => {
        //         return !item.Checked;
        //    })
            for (let i = 0; i < this.cartList.length;i++){
                if (this.cartList[i].Checked)
                {
                    this.cartList.splice(i, 1);
                    i--;
                }   
                
            }
            //重置全选按钮和选项数
            this.checkedNum = 0;
            this.isAll();
        },
        /*商品数量改变按钮 */
        changeQty: function (flag, item) {
            if (flag === 1 && item.Qty < item.store)
                item.Qty++;
            else if (flag === -1 && item.Qty > 1)
                item.Qty--;
        },
        /*商品选择按钮 */
        selectIcon: function (item) {
            item.Checked = !item.Checked;
            if (item.Checked)
                this.checkedNum++;
            else
                this.checkedNum--;
            this.isAll();
        },
        /*根据checkedNum来判断当前状态是否全部已选 */
        isAll: function () {
            if (this.cartList.length && this.checkedNum == this.cartList.length)
                this.allFlag = true;
            else
                this.allFlag = false;  
        },
        /*进行全选或全不选操作 */
        checkAll: function () {
                this.allFlag = !this.allFlag; //进行反选
                this.cartList.forEach(item => {
                    item.Checked = this.allFlag ? true : false;
                })
                this.checkedNum = this.allFlag ? this.cartList.length : 0;
        }
    },
    computed: {
        amount: function () {
            let num = 0;
            this.cartList.forEach(item => {
                // if (item.Checked)
                //     num += item.Qty * item.price;
                //两种写法效果一致，但是前者item.Checked改变不会引起响应式数据改变
                item.Checked && (num += item.Qty * item.price);
            });
            return num;
        },
    }
})