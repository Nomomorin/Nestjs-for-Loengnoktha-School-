# ระบบจ่ายยาโรงเรียนเลิงนกทา
back end ระบบจ่ายยาของโรงเรียนเลิงนกทา พัฒนาด้วยเทคโนโลยี NestJs (ฐานข้อมูล mySqli)

## สารบัญ

 - [ขั้นตอนการติดตั้ง](#%E0%B8%82%E0%B8%B1%E0%B9%89%E0%B8%99%E0%B8%95%E0%B8%AD%E0%B8%99%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%95%E0%B8%B4%E0%B8%94%E0%B8%95%E0%B8%B1%E0%B9%89%E0%B8%87)
 - [วิธีการรัน](#%E0%B8%A7%E0%B8%B4%E0%B8%98%E0%B8%B5%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%A3%E0%B8%B1%E0%B8%99)
 - [ระบบ](#%E0%B8%A3%E0%B8%B0%E0%B8%9A%E0%B8%9A)
 - [เครดิต](#%E0%B9%80%E0%B8%84%E0%B8%A3%E0%B8%94%E0%B8%B4%E0%B8%95)
## ขั้นตอนการติดตั้ง
`

       git clone https://github.com/Nomomorin/Angular-for-Loengnoktha-School.git

       
       npm install'

 

## วิธีการรัน

    development
    $ npm run start
    
    watch mode
    $ npm run start:dev
    
    production mode
    $ npm run start:prod`


## ระบบ

    ติดต่อกับฐานข้อมูล(mySqli) อย่างเช่น ลบ เพิ่ม แก้ไข อ่าน
    - ฐานข้อมูลชื่อ database_loengnoktha_school
	    ตารางข้อมูลมี3ตาราง
		-drug
			-id (number)
			-name_drug (text)
			-detail_drug (text)
			-more_drug (text)
			-have_drug (boolean)
		-student
			-id (number)
			-id_student (number)
			-drug_allergy (text)
			-name (text)
			-sex (text)
			-level (number)
			-blood_type (text)
			-more (text)
		-history
			-id (number)
			-drugRecipient (text)
			-illness (text)
			-list_drug (text)
			-nameDispenser (text)
			-date
			-time
	    

## เครดิต
Phuphirawit  - (Developer)