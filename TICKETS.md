# QA has submitted the following tickets


## Customer Orders Table
### QA Notes
When viewing the Customer Orders table, the times don't always display correctly. They're in 24-hour format when they should be in 12-hour format with AM/PM displayed.

Additionally, time should display in (H)H:MM format, but currently 12:07 displays as 12:7.

### Dev Notes / Response

Should be fixed the format looks like this July 21, 2021 6:07 PM as an example.	You seem to wanted (H)H:MM format. What I have is h:MM. I tried the format listed and what I got was this (18)18:07 which I don't think you want. We can recheck this to make sure it's correct.  

---

I saw that there was a format date function. You might have wanted me to use it and fix it but I went with an import of a date library instead and I will give my reason. My reason was more real world based and what I would have really done in real life. So there are date libraries that are already battled tested and proven to work. I choose dayjs cause it was simply but if we need more functionality we can date-fns. This also removes code making it more readable and quicker to implement. Also, date formats are pretty universal so I don't think we would need something more custom.
## Customer Order Details
### QA Notes
There seems to be an issue with total price sometimes. On some order details, the total price is displaying values after the penny.

### Dev Notes / Response


---


## Delete a Customer Order
### QA Notes
I'm currently unable to delete a customer order. Every time I click the "Delete" button from the Customer Orders table, I get a white screen.

### Dev Notes / Response


---


## Other