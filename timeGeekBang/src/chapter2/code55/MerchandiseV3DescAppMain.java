package chapter2.code55;

import chapter2.code55.supermarket.MerchandiseV2WithConstructor;

public class MerchandiseV3DescAppMain {
    public static void main(String[] args) {
        MerchandiseV2WithConstructor merchandise = new MerchandiseV2WithConstructor("书桌", "DESK9527", 40, 999.9, 500);

        // >> TODO 如果我们自己添加类的构造方法，Java就不会再添加无参数的构造方法。
        // >> TODO 这时候，就不能直接new一个对象不传递参数了（看例子）
        // MerchandiseV2WithConstructor merchandise2 = new MerchandiseV2WithConstructor();

        merchandise.describe();
    }
}
