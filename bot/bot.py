from os import name, replace
from typing import Text
from aiogram import Bot, types
from aiogram.contrib.fsm_storage.memory import MemoryStorage
from aiogram.dispatcher import Dispatcher
from aiogram.utils.exceptions import Throttled
from aiogram.utils import executor
from aiogram.utils.helper import Helper, HelperMode, ListItem

from database import db
import markups as btn
import infobot as info

db = db()

bot = Bot(token=info.token)
storage = MemoryStorage()
dp = Dispatcher(bot, storage=storage)
print('start')

class States(Helper):
    mode = HelperMode.snake_case


@dp.message_handler(commands=['start'], state="*")
async def send_start(message: types.Message):
    await message.answer(
        text = "Здесь будет GroUp с топовым web интерфейсом",
        reply_markup=btn.show_web
    )


if __name__ == '__main__':
    executor.start_polling(dp, skip_updates=True)