from aiogram.types import KeyboardButton, ReplyKeyboardMarkup, InlineKeyboardButton, InlineKeyboardMarkup, WebAppInfo

webApp = WebAppInfo(url="https://gro-up.herokuapp.com")
web = InlineKeyboardButton(text="GroUp", web_app=webApp)
show_web = InlineKeyboardMarkup(row_width=1).add(web)