CREATE TABLE menu_80 (
    id int NOT NULL PRIMARY KEY,
    title varchar(255),
    description varchar(255),
    category varchar(255),
    img varchar(255),
    remote_img varchar(255),
    price real
)

INSERT INTO menu_80 (id, title, description, category, img, remote_img, price)
VALUES
(1,'buttermilk pancakes','Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam dolores ut iusto quas quia dignissimos ullam. E','breakfast','/menu/images/item-1.jpeg', '',15.59),
(2,'Diner Double','Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam dolores ut iusto quas quia dignissimos ullam. E','dessert','/menu/images/item-2.jpeg', '',13.59),
(3,'Godzilla Milkshake','Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam dolores ut iusto quas quia dignissimos ullam. E','shakes','/menu/images/item-3.jpeg', '',6.59),
(4,'Country Delight','Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam dolores ut iusto quas quia dignissimos ullam. E','lunch','/menu/images/item-4.jpeg', '',20.99),
(5,'Egg Attack','Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam dolores ut iusto quas quia dignissimos ullam. E','breakfast','/menu/images/item-5.jpeg', '',2.99),
(6,'Oreo Dream','Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam dolores ut iusto quas quia dignissimos ullam. E','shakes','/menu/images/item-6.jpeg', '',18.99),
(7,'Bacon Overview','Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam dolores ut iusto quas quia dignissimos ullam. E','breakfast','/menu/images/item-7.jpeg', '',8.99),
(8,'American Classic','Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam dolores ut iusto quas quia dignissimos ullam. E','lunch','/menu/images/item-8.jpeg', '',12.99),
(9,'Quarantine Buddy','Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam dolores ut iusto quas quia dignissimos ullam. E','shakes','/menu/images/item-9.jpeg', '',13.99)