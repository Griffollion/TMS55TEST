Подробная документация по гиту https://git-scm.com/book/ru/v2

Инструкция для начинающих https://monsterlessons.com/project/series/git-dlya-nachinayushih

Сервис хранения проектов с которым мы будем работать https://github.com/

Видео по git https://www.youtube.com/watch?v=zZBiln_2FhM

Наш репозиторий https://github.com/Griffollion/TMS55TEST

-------------------------------------------------------------------------

Краткий список самых необходимых комманд с описанием

git init - создает в вашей папке git репозиторий. Основная комманда при старте проекта с нуля. После нее можно использовать другие git комманды. Делается один раз.  

git status - отображает статус вашего репозитория

git add имя_файла - помечает файл как "отслеживается для фиксации". В консоли имя файла становится зеленым. Когда файл помечен как "отслеживается для фиксации" его можно зафиксировать(закоммитить). Если файл не "отслеживается для фиксации" в коммит он не попадет

git add . - помечает все файлы в папке как "отслеживается для фиксации"

git rm имя файла - убирает пометку "отслеживается для фиксации" с файла

git commit -m 'Текст коммита' - делает фиксацию всех файлов которые помечены как "отслеживается для фиксации" (высвечиваются зелененьким после git status)

git remote add название_для_источника(обычно origin) путь_к_внешнему_репозиторию(напр. https://github.com/Griffollion/TMS55TEST.git) - создает связь вашего локального проекта с внешним проектом

git remote -v - отображает список соединений в внешним репозиторием. Если после введения данной комманды в консоли ничего не выводится, значит связь не настроена.

git push -u название_для_источника(обычно origin) имя_ветки - отправляет изменения в ветку которую вы указали в названии

git branch -M имя_ветки - создает новую ветку от текущей ветки и переключает вас на нее

git checkout -b имя_ветки - делает то же самое что git branch -M

git checkout имя_ветки - без атрибута -b переключает вас на уже существующую ветку

git merge имя_ветки - подтягивает изменения с ветки которую вы указали после merge в вашу текущую ветку

git fetch - обновления состояния проекта без слияния изменений в ветку 

git pull - подтягивает последние изменения с ветки внешнего репозитория в ветку в которой вы сейчас находитесь.

git clone путь_к_внешнему_репозиторию(напр. https://github.com/Griffollion/TMS55TEST.git) . - клонирует внешний репозиторий к вам в папку. При клонировании репозитория нет нужды делать git init и git remote add. Точка в конце комманды !!!ОЧЕНЬ!!! важна. Если вы не поставите ее, у вас вместо клонирования файлов репозитория, дополнительно склонируется папка репозитория. Это может ввести вас в замешательство, т.к. все git команды будут вести себя странно. Чтобы небыло проблем, ставьте точку. Если склонировали целую папку, закрывайте редактор и заново открывайте папку которую склонировали. Еще вариант перейти в склонированную папку через консоль при помощи команды cd

--------------------------------------------------------------------------------------------------------------

Отличия git pull и git fetch https://tproger.ru/explain/git-pull-and-git-fetch-whats-the-difference/

-------------------------------------------------------------------------------------------------------------

Последовательность действий при первом клонировании внешнего репозитория

git clone путь_к_внешнему_репозиторию(напр. https://github.com/Griffollion/TMS55TEST.git)

git branch -M имя_ветки

Чет делаете (создаете файлики, пишете новый код в этих файликах)

git add .

git commit -m 'Текст коммита'

git push -u название_для_источника(обычно origin) имя_ветки(то которое указывали в git branch -M)

