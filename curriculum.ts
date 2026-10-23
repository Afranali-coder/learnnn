import type { Lesson } from "@/types";

export const curriculum: Lesson[] = [
  // ═══════════════════════════════════════════════════════════════
  // BASIC PHASE
  // ═══════════════════════════════════════════════════════════════
  {
    id: "basic-syntax",
    title: "Python Syntax & Print",
    phase: "basic",
    icon: "Terminal",
    analogy:
      "Python syntax seekha naye din ka pehla intro hai. Jaise naye school mein pehle din principal sir bolte hain 'Welcome students!' — waise hi Python mein `print()` se aap computer ko bolte ho ki screen pe kuch dikhao. Syntax matlab language ke rules — jaise Hindi likhne ke rules alag, English ke alag. Python ka syntax itna simple hai ki lagta hai hi English mein likh rahe ho!",
    codeSnippet: `# Yeh ek comment hai - Python isse ignore karta hai
print("Namaste Duniya!")
print("Main Python seekh raha hoon")

# Multiple cheezein bhi print kar sakte ho
print("Cricket score:", 250, "runs")`,
    explanation:
      "`print()` ek function hai jo screen pe text dikhata hai. `#` se shuru hone wali lines comments hote hain — Python inko nahi padhta, sirf insaan padhne ke liye hote hain. Quotation marks `\"` ke andar ka text string kehlata hai. Commas `,` se multiple cheezein ek hi print mein dikh sakti hain.",
    challenge: {
      prompt:
        "Ek program likho jo do lines print kare: pehli line mein aapka naam, doosri mein aapka fav cricket player.",
      starterCode: `# Niche likho apna code
print(" ")`,
      solution: `print("Mera naam Rahul hai")
print("Mera fav player: Virat Kohli")`,
      hint: "Do baar print() use karo, har ek mein alag text daalo.",
    },
  },
  {
    id: "basic-variables",
    title: "Variables & Data Types",
    phase: "basic",
    icon: "Box",
    analogy:
      "Variables ek type ke container hote hain jisme aap data store karte ho — bilkul kitchen ke dabbe jaisa. Ek dabbe mein namak, doosre mein mirch, teesre mein haldi. Har dabbe pe label lagta hai na? Wahi variable ka naam hai. Aur dabbe ke andar jo cheez hai uska type (namak/masala) wahi data type hai. Python mein main types hain: int (whole numbers), float (decimal), str (text), aur bool (sach/galat).",
    codeSnippet: `# Integer - whole numbers
age = 25
print("Umar:", age)

# Float - decimal numbers
price = 99.50
print("Daam:", price)

# String - text
name = "Sachin"
print("Naam:", name)

# Boolean - True ya False
is_captain = True
print("Captain hai?", is_captain)

# Variable ki value change karna
age = 26
print("Nayi umar:", age)`,
    explanation:
      "Variable banane ke liye sirf naam likho, `=` lagao, aur value daalo. Python khud samajh jata hai ki type kya hai (dynamic typing). `int` whole numbers ke liye, `float` decimals ke liye, `str` text ke liye (quotes mein), `bool` True/False ke liye. Variable ki value baad mein bhi change kar sakte ho — purani value gayab ho jayegi.",
    challenge: {
      prompt:
        "Ek variable `team` banao jisme aapki fav cricket team ka naam ho. Ek `score` variable banao jisme team ka score (integer) ho. Dono ko print karo.",
      starterCode: `# Niche likho apna code
team = 
score = 
print( )`,
      solution: `team = "Mumbai Indians"
score = 186
print("Team:", team)
print("Score:", score)`,
      hint: "Team ka naam quotes mein string ke roop mein, score bina quotes ke integer ke roop mein.",
    },
  },
  {
    id: "basic-strings",
    title: "Strings & Input",
    phase: "basic",
    icon: "Type",
    analogy:
      "Strings se matlab text se hai — jaise WhatsApp pe message type karna. Aur `input()` function se aap user se kuch puch sakte ho — bilkul Google form jaisa jisme user type karke jawab deta hai. String ko aap aage-peeche jod (concatenate) sakte ho, uski length nikal sakte ho, ya usko alag-alag tareeke se modify kar sakte ho.",
    codeSnippet: `# User se input lena
naam = input("Aapka naam kya hai? ")
print("Namaste", naam + "!")

# String operations
message = "Python"
print("Length:", len(message))        # 6
print("Uppercase:", message.upper())   # PYTHON
print("Lowercase:", message.lower())   # python

# String formatting (f-string)
player = "Dhoni"
centuries = 16
print(f"{player} ne {centuries} centuries lagaye")`,
    explanation:
      "`input()` user se text leta hai (always string mein). `len()` string ki length deta hai. `.upper()` aur `.lower()` string ko capital/small mein convert karte hain. f-strings (f\"...\") sabse modern tareeka hai text mein variables embed karne ka — curly braces `{}` ke andar variable daalo.",
    challenge: {
      prompt:
        "User se uska fav movie puchho. Phir us movie ke naam ki length print karo aur bolo 'Teri fav movie ___ words ka naam hai!'",
      starterCode: `# Niche likho apna code
movie = input(" ")`,
      solution: `movie = input("Fav movie ka naam bolo: ")
print("Length:", len(movie))
print(f"Teri fav movie {len(movie)} characters ka naam hai!")`,
      hint: "len() function use karo length ke liye, aur f-string se format karo.",
    },
  },
  {
    id: "basic-conditionals",
    title: "Conditional Statements",
    phase: "basic",
    icon: "GitBranch",
    analogy:
      "Conditionals se matlab faisla lena — jaise traffic signal pe: green light hai toh chalo, red hai toh ruko, yellow hai toh ready ho jao. Python mein `if`, `elif`, aur `else` se aap code ko bolte ho ki agar yeh condition sach hai toh yeh karo, warna woh karo. Indentation (4 spaces ki space) bahut important hai Python mein — yeh batata hai kaunsa code kis condition ke andar hai.",
    codeSnippet: `# Cricket score checker
score = 75

if score >= 100:
    print("Century! Mubarak ho!")
elif score >= 50:
    print("Half-century! Achha khela!")
else:
    print("Aur practice karo bhai")

# Nested conditionals
age = 20
has_id = True

if age >= 18:
    if has_id:
        print("Entry mil gayi! Party time!")
    else:
        print("ID le ke aao pehle")
else:
    print("Ghar jao, abhi chhote ho")`,
    explanation:
      "`if` se condition check hoti hai. Agar True ho toh uske andar ka code chalta hai. `elif` (else if) baaki conditions check karta hai jab `if` False ho. `else` tab chalta hai jab koi bhi condition True nahi hui. Dhyan rakho: colon `:` lagana zaroori hai aur next line pe 4 spaces ki indent deni hai.",
    challenge: {
      prompt:
        "User se temperature input lo (integer). Agar temp 30 se zyada hai toh 'Bahut garmi hai!' print karo. 15-30 ke beech toh 'Achha mausam hai'. 15 se kam toh 'Thand hai!'",
      starterCode: `# Niche likho apna code
temp = int(input("Temperature kya hai? "))`,
      solution: `temp = int(input("Temperature kya hai? "))

if temp > 30:
    print("Bahut garmi hai!")
elif temp >= 15:
    print("Achha mausam hai")
else:
    print("Thand hai!")`,
      hint: "int() se input ko number mein convert karo, phir if/elif/else lagao.",
    },
  },
  {
    id: "basic-loops",
    title: "Loops (For & While)",
    phase: "basic",
    icon: "Repeat",
    analogy:
      "Loops ka matlab baar-baar karna — jaise gym mein 10 baar push-ups karna, ya cricket mein over mein 6 balls daalna. `for` loop tab use hota hai jab aapko pata hai kitni baar karna hai. `while` loop tab use hota hai jab condition sach tak karte raho. Dono se aap repetitive kaam ko ek code se kar sakte ho.",
    codeSnippet: `# For loop - 1 se 5 tak counting
for i in range(1, 6):
    print("Ball number:", i)

# For loop over a list
players = ["Virat", "Rohit", "Bumrah"]
for player in players:
    print("Player:", player)

# While loop - jab tak condition sach
countdown = 3
while countdown > 0:
    print("Countdown:", countdown)
    countdown -= 1
print("Go!")`,
    explanation:
      "`range(1, 6)` 1 se 5 tak numbers deta hai (6 exclude). `for` loop har number ko `i` mein dalkar code chalata hai. List pe loop chalane ke liye directly item milta hai. `while` loop mein condition jab tak True hai tab tak chalta hai — dhyan rakho ki condition kabhi False ho jaye warna infinite loop!",
    challenge: {
      prompt:
        "1 se 10 tak ke even numbers print karo for loop use karke. Hint: range(2, 11, 2) use kar sakte ho.",
      starterCode: `# Niche likho apna code
for i in range(  ):
    print(i)`,
      solution: `for i in range(2, 11, 2):
    print(i)`,
      hint: "range(start, stop, step) ka third argument step size hai. Even numbers ke liye step 2 use karo.",
    },
  },

  // ═══════════════════════════════════════════════════════════════
  // INTERMEDIATE PHASE
  // ═══════════════════════════════════════════════════════════════
  {
    id: "intermediate-functions",
    title: "Functions",
    phase: "intermediate",
    icon: "FunctionSquare",
    analogy:
      "Functions ek type ke recipe jaise hain — jaise mummy ka khana banane ka recipe. Ek baar recipe likh lo, phir baar-baar use kar sakte ho. `def` se function define karte hain. Function ko inputs (parameters) de sakte ho aur wo output (return) deta hai. Jaise mixer grinder le lo — sabzi daalo, peesa lo, output milta hai. Har baar naya grinder nahi lena padta!",
    codeSnippet: `# Simple function
def greet(name):
    return f"Namaste {name}!"

result = greet("Arjun")
print(result)

# Function with default parameter
def calculate_score(runs, wickets=0):
    return runs + (wickets * 20)

print(calculate_score(100))         # 100
print(calculate_score(100, 2))      # 140

# Function with multiple returns
def analyze_score(score):
    if score >= 100:
        return "Century", True
    return "Not century", False

status, is_century = analyze_score(120)
print(status, is_century)`,
    explanation:
      "`def` se function banta hai, parentheses `()` ke andar parameters aate hain. `return` se function value wapas deta hai. Default parameter (`wickets=0`) optional banata hai agar user na de. Multiple values return kar sakte ho — tuple mein milte hain. Function ko call karne ke liye naam likho aur arguments daalo.",
    challenge: {
      prompt:
        "Ek function `tip_calculator(bill_amount, tip_percent=10)` banao. Total bill (bill + tip) return karo. Bill 500 aur tip 15% ke saath test karo.",
      starterCode: `def tip_calculator(bill_amount, tip_percent=10):
    # Niche likho apna code
    pass

print(tip_calculator(500, 15))`,
      solution: `def tip_calculator(bill_amount, tip_percent=10):
    tip = bill_amount * tip_percent / 100
    return bill_amount + tip

print(tip_calculator(500, 15))`,
      hint: "tip = bill_amount * tip_percent / 100, phir total return karo.",
    },
  },
  {
    id: "intermediate-file-handling",
    title: "File Handling",
    phase: "intermediate",
    icon: "FileText",
    analogy:
      "File handling se matlab computer ki diary mein likhna aur padhna — jaise notebook mein notes likhna. Aap file bana sakte ho, usme data likh sakte ho, ya padh sakte ho. `open()` function se file khulti hai. `with` statement use karna best practice hai kyunki wo file ko automatically band kar deta hai — jaise shop ka door auto-close ho jata hai jab aap nikalte ho.",
    codeSnippet: `# File mein likhna
with open("diary.txt", "w") as file:
    file.write("Aaj maine Python seekha!\\n")
    file.write("Bohot maza aaya!\\n")

# File padhna
with open("diary.txt", "r") as file:
    content = file.read()
    print(content)

# Line by line padhna
with open("diary.txt", "r") as file:
    for line in file:
        print("Line:", line.strip())

# Append mode - existing content baad mein add
with open("diary.txt", "a") as file:
    file.write("Kal aur seekhunga!\\n")`,
    explanation:
      "`open()` ke modes: `\"w\"` write (purani file overwrite ho jayegi), `\"r\"` read, `\"a\"` append (end pe add karo). `with` block se file automatically close ho jati hai. `.write()` se likhte hain, `.read()` se poora text padhte hain. Line by line padhne ke liye file pe direct loop chala sakte ho. `\\n` newline character hai.",
    challenge: {
      prompt:
        "Ek file 'shopping.txt' bana kar usme 3 shopping items likho. Phir file ko dobara khol ke padho aur print karo.",
      starterCode: `# Niche likho apna code
with open("shopping.txt", "w") as f:
    f.write( )`,
      solution: `with open("shopping.txt", "w") as f:
    f.write("1. Dudh\\n")
    f.write("2. Aata\\n")
    f.write("3. Chawal\\n")

with open("shopping.txt", "r") as f:
    print(f.read())`,
      hint: "Pehle 'w' mode mein likho, phir 'r' mode mein khol ke read() karo.",
    },
  },
  {
    id: "intermediate-oop",
    title: "OOP - Classes & Objects",
    phase: "intermediate",
    icon: "Boxes",
    analogy:
      "OOP ka concept car ke design se samjho. Company ke paas ek car ka blueprint hai (Class). Us blueprint se bohot saari cars ban ti hain (Objects). Har car ka apna color, model, number hai (attributes). Aur har car chalti hai, break marti hai (methods). Class ek template hai, object uss template ka real instance. Jaise 'Shah Rukh Khan' ek actor class ka object hai — naam alag, capabilities same.",
    codeSnippet: `class CricketPlayer:
    # Constructor - object banne pe call hota hai
    def __init__(self, name, role):
        self.name = name
        self.role = role
        self.score = 0

    # Method - object ka action
    def add_runs(self, runs):
        self.score += runs
        print(f"{self.name} ne {runs} runs banaye!")

    def get_info(self):
        return f"{self.name} ({self.role}) - Total: {self.score}"

# Object banana
virat = CricketPlayer("Virat Kohli", "Batsman")
bumrah = CricketPlayer("Jasprit Bumrah", "Bowler")

virat.add_runs(50)
virat.add_runs(55)

print(virat.get_info())
print(bumrah.get_info())`,
    explanation:
      "`class` se blueprint banta hai. `__init__` constructor hai — object bante hi call hota hai. `self` current object ko refer karta hai (jaise 'main'/'myself'). Attributes (`self.name`) object ka data store karte hain. Methods class ke andar functions hain. Object `ClassName(...)` se banta hai. Har object ka apna alag data hota hai.",
    challenge: {
      prompt:
        "Ek `Movie` class banao jisme `title`, `director`, aur `rating` attributes ho. Ek method `get_details()` banao jo movie ki details string mein return kare. Ek object banao aur test karo.",
      starterCode: `class Movie:
    def __init__(self, title, director, rating):
        # Niche likho
        pass

    def get_details(self):
        pass

# Object banao
movie1 = Movie(" ", " ",  )`,
      solution: `class Movie:
    def __init__(self, title, director, rating):
        self.title = title
        self.director = director
        self.rating = rating

    def get_details(self):
        return f"{self.title} by {self.director} - Rating: {self.rating}/10"

movie1 = Movie("3 Idiots", "Rajkumar Hirani", 9)
print(movie1.get_details())`,
      hint: "__init__ mein self.title = title karo, get_details mein f-string return karo.",
    },
  },
  {
    id: "intermediate-inheritance",
    title: "Inheritance",
    phase: "intermediate",
    icon: "GitMerge",
    analogy:
      "Inheritance se matlab baap ka property bachhe ko milna — jaise business mein father ka shop son ko inherit milta hai. Son ko nayi cheezein bhi add kar sakta hai, aur father ki sabhi cheezein use kar sakta hai. Python mein ek class (child) doosri class (parent) se inherit kar sakti hai. Child class parent ke saare methods aur attributes use kar sakti hai, aur apne bhi add kar sakti hai.",
    codeSnippet: `# Parent class
class Animal:
    def __init__(self, name):
        self.name = name

    def eat(self):
        print(f"{self.name} kha raha hai")

    def sleep(self):
        print(f"{self.name} so raha hai")

# Child class - Animal se inherit
class Dog(Animal):
    def bark(self):
        print(f"{self.name} bhonk raha hai: Woof!")

# Child class with override
class Cat(Animal):
    def __init__(self, name, color):
        super().__init__(name)  # Parent ka constructor call
        self.color = color

    def eat(self):  # Method overriding
        print(f"{self.color} {self.name} doodh pee raha hai")

# Testing
tommy = Dog("Tommy")
tommy.eat()     # Inherited from Animal
tommy.bark()    # Dog's own method

mini = Cat("Mini", "Safed")
mini.eat()      # Overridden method
print(mini.color)`,
    explanation:
      "`class Child(Parent)` se inheritance hoti hai. Child ko parent ke saare methods milte hain automatically. `super().__init__()` se parent ka constructor call karte ho. Method overriding: child mein same naam ka method bana do toh parent wala replace ho jata hai. `super()` parent class ko refer karta hai.",
    challenge: {
      prompt:
        "Ek `Vehicle` parent class banao jisme `brand` attribute aur `start()` method ho. Ek `Bike` child class banao jo Vehicle se inherit kare aur ek extra `wheelie()` method add kare.",
      starterCode: `class Vehicle:
    def __init__(self, brand):
        self.brand = brand

    def start(self):
        print(f"{self.brand} start ho gaya")

# Niche Bike class banao
`,
      solution: `class Vehicle:
    def __init__(self, brand):
        self.brand = brand

    def start(self):
        print(f"{self.brand} start ho gaya")

class Bike(Vehicle):
    def wheelie(self):
        print(f"{self.brand} bike pe wheelie!")

my_bike = Bike("Royal Enfield")
my_bike.start()
my_bike.wheelie()`,
      hint: "class Bike(Vehicle): likho, phir wheelie method andar define karo.",
    },
  },
  {
    id: "intermediate-error-handling",
    title: "Error Handling (Try/Except)",
    phase: "intermediate",
    icon: "AlertTriangle",
    analogy:
      "Error handling suraksha net jaisa hai — jaise circus mein acrobat ke neeche net laga hota hai. Agar gir bhi gaya toh kuch nahi hota. Python mein `try/except` se aap code ko safe rakhte ho. Agar `try` block mein error aata hai, toh program crash nahi hota — `except` block chalta hai aur error handle ho jata hai. Aage `else` (jab error nahi aaya) aur `finally` (hamesha chalega) bhi use kar sakte ho.",
    codeSnippet: `# Basic try/except
try:
    number = int(input("Ek number daalo: "))
    result = 100 / number
    print(f"100 / {number} = {result}")
except ValueError:
    print("Bhai yeh number nahi hai!")
except ZeroDivisionError:
    print("0 se divide nahi hota!")
except:
    print("Kuch toh gadbad hai")

# Else aur Finally
try:
    num = int("42")
except ValueError:
    print("Error aaya")
else:
    print("Sab sahi chala!")  # Error nahi aaya tab
finally:
    print("Yeh hamesha chalega")  # Hamesha`,
    explanation:
      "`try` mein risky code daalo. `except` mein error handle karo — specific error type bhi mention kar sakte ho (`ValueError`, `ZeroDivisionError`). Multiple `except` blocks alag-alag errors ke liye ho sakte hain. `else` tab chalta hai jab koi error nahi aata. `finally` hamesha chalta hai chahe error aaye ya na aaye — cleanup ke liye useful.",
    challenge: {
      prompt:
        "User se do numbers lo aur pehla number doosre se divide karo. ZeroDivisionError aur ValueError dono handle karo try/except se.",
      starterCode: `try:
    a = int(input("Pehla number: "))
    b = int(input("Doosra number: "))
    # Niche divide karo aur print karo
except :
    print("")`,
      solution: `try:
    a = int(input("Pehla number: "))
    b = int(input("Doosra number: "))
    print(f"Result: {a / b}")
except ValueError:
    print("Sirf numbers daalo!")
except ZeroDivisionError:
    print("0 se divide nahi hota!")`,
      hint: "Do except blocks banao — ek ValueError ke liye, ek ZeroDivisionError ke liye.",
    },
  },

  // ═══════════════════════════════════════════════════════════════
  // ADVANCED PHASE
  // ═══════════════════════════════════════════════════════════════
  {
    id: "advanced-decorators",
    title: "Decorators",
    phase: "advanced",
    icon: "Sparkles",
    analogy:
      "Decorators ek function ke upar ek gift wrap jaise hain. Function same rehta hai, par uske behaviour mein extra features add ho jate hain — bina original function ko change kiye. Jaise ghar ke bahar paint kar do toh ghar same hai par naya look mil gaya. Decorator ek function hai jo doosre function ko input leke ek naya modified function return karta hai. `@` symbol se decorator lagta hai.",
    codeSnippet: `# Timer decorator - function ka time measure karta hai
import time

def timer(func):
    def wrapper(*args, **kwargs):
        start = time.time()
        result = func(*args, **kwargs)
        end = time.time()
        print(f"{func.__name__} ko {end - start:.4f} second lage")
        return result
    return wrapper

# Decorator use karna
@timer
def slow_function():
    time.sleep(1)
    print("Kaam ho gaya!")

slow_function()

# Multiple decorators
def uppercase_result(func):
    def wrapper(*args, **kwargs):
        result = func(*args, **kwargs)
        return result.upper()
    return wrapper

@timer
@uppercase_result
def greet(name):
    return f"namaste {name}"

print(greet("Arjun"))`,
    explanation:
      "Decorator ek function hai jo function leta hai aur naya function (wrapper) return karta hai. `@decorator_name` syntax se lagta hai — yeh `func = decorator(func)` ka shortcut hai. Wrapper function original function ko call karke uske aas-paas extra code add karta hai. `*args, **kwargs` se wrapper koi bhi arguments accept kar sakta hai. Multiple decorators neeche se upar apply hote hain.",
    challenge: {
      prompt:
        "Ek `log_call` decorator banao jo function call hone pe uska naam aur arguments print kare. Phir us decorator ko ek simple `add(a, b)` function pe lagao.",
      starterCode: `def log_call(func):
    def wrapper(*args, **kwargs):
        # Niche likho
        pass
    return wrapper

@log_call
def add(a, b):
    return a + b`,
      solution: `def log_call(func):
    def wrapper(*args, **kwargs):
        print(f"Calling {func.__name__} with args: {args}")
        result = func(*args, **kwargs)
        print(f"{func.__name__} returned: {result}")
        return result
    return wrapper

@log_call
def add(a, b):
    return a + b

add(5, 3)`,
      hint: "Wrapper mein print(func.__name__, args) karo, phir result = func(*args, **kwargs) call karo.",
    },
  },
  {
    id: "advanced-generators",
    title: "Generators",
    phase: "advanced",
    icon: "Infinity",
    analogy:
      "Generators ek pani ki tap (faucet) jaise hain. Normal function ek baar mein saara pani bucket mein daal deta hai (return). Generator ek tap hai — ek glass nikalo, doosra nikalo, jab chaho tab nikalo. Memory bachti hai kyunki saara data ek saath nahi banta. `yield` keyword use hota hai `return` ki jagah — function ko beech mein rok ke value deta hai, phir wahi se resume hota hai.",
    codeSnippet: `# Simple generator
def count_up_to(n):
    count = 1
    while count <= n:
        yield count
        count += 1

# Generator use karna
for num in count_up_to(5):
    print(num)

# Generator function - memory efficient
def fib_generator(limit):
    a, b = 0, 1
    while a < limit:
        yield a
        a, b = b, a + b

for fib in fib_generator(50):
    print(fib, end=" ")
print()

# next() se manually values nikalna
gen = count_up_to(3)
print(next(gen))  # 1
print(next(gen))  # 2
print(next(gen))  # 3

# Generator expression (list comprehension jaisa)
squares = (x**2 for x in range(5))
for s in squares:
    print(s)`,
    explanation:
      "`yield` function ko generator bana deta hai. Jab `yield` milta hai function wahi ruk jata hai aur value return karta hai. Next call pe wahi se resume hota hai. `next()` se manually next value nikalte ho. Generator expressions `(x for x in ...)` list comprehension `[]` ki tarah hote hain par memory efficient — saari values ek saath memory mein nahi hoti. Large data ke liye perfect.",
    challenge: {
      prompt:
        "Ek generator `even_squares(n)` banao jo 0 se n tak ke even numbers ke squares yield kare. n=10 ke saath test karo.",
      starterCode: `def even_squares(n):
    for i in range(n):
        # Niche likho
        pass

for sq in even_squares(10):
    print(sq)`,
      solution: `def even_squares(n):
    for i in range(n):
        if i % 2 == 0:
            yield i ** 2

for sq in even_squares(10):
    print(sq)`,
      hint: "for loop chalao, if i % 2 == 0 check karo, phir yield i ** 2 karo.",
    },
  },
  {
    id: "advanced-context-managers",
    title: "Context Managers",
    phase: "advanced",
    icon: "Lock",
    analogy:
      "Context manager ek smart lock jaisa hai — jaise ghar ka auto-lock door. Aap andar jao (enter), kaam karo, aur jab bahar jaate ho toh door automatically lock ho jata hai. `with` statement se context manager use hota hai. File handling mein humne pehle dekha — `with open()` se file automatically close ho jati hai. Custom context managers bhi bana sakte hain `__enter__` aur `__exit__` methods se.",
    codeSnippet: `# Class-based context manager
class DatabaseConnection:
    def __init__(self, db_name):
        self.db_name = db_name

    def __enter__(self):
        print(f"Connecting to {self.db_name}...")
        return self

    def __exit__(self, exc_type, exc_val, exc_tb):
        print(f"Connection to {self.db_name} closed")
        if exc_type:
            print(f"Error handled: {exc_val}")
        return True  # Error suppress karta hai

# Using context manager
with DatabaseConnection("my_db") as db:
    print("Query running...")
    # raise ValueError("Oops")  # Yeh bhi handle ho jayega

# contextlib - shortcut method
from contextlib import contextmanager

@contextmanager
def timer_block():
    import time
    start = time.time()
    try:
        yield
    finally:
        end = time.time()
        print(f"Block took {end - start:.4f}s")

with timer_block():
    total = sum(range(1_000_000))
    print(f"Sum: {total}")`,
    explanation:
      "`__enter__` method `with` block enter karte pe chalta hai aur `as` variable ko value deta hai. `__exit__` block end hone pe chalta hai — cleanup, closing, error handling yahaan hota hai. `exc_type`, `exc_val`, `exc_tb` error info dete hain. `return True` from `__exit__` error ko suppress karta hai. `@contextmanager` decorator se generator ko context manager bana sakte ho — `yield` se `with` block ka body run hota hai.",
    challenge: {
      prompt:
        "Ek context manager class `FileManager` banao jo `__enter__` mein 'File opened' print kare aur `__exit__` mein 'File closed' print kare. `with` statement se use karo.",
      starterCode: `class FileManager:
    def __init__(self, filename):
        self.filename = filename

    def __enter__(self):
        # Niche likho
        pass

    def __exit__(self, exc_type, exc_val, exc_tb):
        # Niche likho
        pass

with FileManager("test.txt"):
    print("Working with file...")`,
      solution: `class FileManager:
    def __init__(self, filename):
        self.filename = filename

    def __enter__(self):
        print(f"File opened: {self.filename}")
        return self

    def __exit__(self, exc_type, exc_val, exc_tb):
        print(f"File closed: {self.filename}")

with FileManager("test.txt"):
    print("Working with file...")`,
      hint: "__enter__ mein print karo 'File opened', __exit__ mein 'File closed'.",
    },
  },
  {
    id: "advanced-threading",
    title: "Multithreading & Multiprocessing",
    phase: "advanced",
    icon: "Cpu",
    analogy:
      "Multithreading ek kitchen mein ek cook ke multiple kaam ek saath karna. Multiprocessing alag-alag cooks hire karna. Threading I/O-bound kaam ke liye accha (file/network wait), multiprocessing CPU-bound kaam ke liye (heavy calculations). Jaise restaurant mein ek waiter order le raha hai aur doosra serve kar raha — work parallel ho raha hai. Python mein `threading` aur `multiprocessing` modules se yeh hota hai.",
    codeSnippet: `import threading
import time

# Multithreading example
def download_file(name, duration):
    print(f"Downloading {name}...")
    time.sleep(duration)
    print(f"{name} downloaded!")

# Threads banana
t1 = threading.Thread(target=download_file, args=("Movie.mp4", 2))
t2 = threading.Thread(target=download_file, args=("Song.mp3", 1))

start_time = time.time()

# Threads start karna
t1.start()
t2.start()

# Threads complete hone wait karna
t1.join()
t2.join()

print(f"Total time: {time.time() - start_time:.2f}s")

# Thread pool - multiple tasks efficiently
from concurrent.futures import ThreadPoolExecutor

def square(n):
    return n * n

with ThreadPoolExecutor(max_workers=3) as executor:
    results = list(executor.map(square, [1, 2, 3, 4, 5]))
    print(f"Squares: {results}")`,
    explanation:
      "`threading.Thread(target, args)` se thread banta hai. `.start()` se thread chalu, `.join()` se main thread ruk jata hai jab tak yeh thread khatam nahi ho jata. Threads parallel chalein lekin Python ke GIL ki wajah se actually ek time pe ek hi chalta — I/O wait time mein useful. `ThreadPoolExecutor` se thread pool ban jata hai, `.map()` se multiple items parallel process hote hain.",
    challenge: {
      prompt:
        "Do threads banao jo alag-alag numbers 1 se 5 tak print karein. Har number ke baad 0.5 second sleep ho. Dono threads ko simultaneously chalao.",
      starterCode: `import threading
import time

def print_numbers(label):
    for i in range(1, 6):
        print(f"{label}: {i}")
        time.sleep(0.5)

# Niche do threads banao aur chalao
`,
      solution: `import threading
import time

def print_numbers(label):
    for i in range(1, 6):
        print(f"{label}: {i}")
        time.sleep(0.5)

t1 = threading.Thread(target=print_numbers, args=("Thread-A",))
t2 = threading.Thread(target=print_numbers, args=("Thread-B",))

t1.start()
t2.start()
t1.join()
t2.join()`,
      hint: "Thread(target=print_numbers, args=(...)) banao, .start() karo, .join() karo.",
    },
  },
  {
    id: "advanced-metaclasses",
    title: "Metaclasses",
    phase: "advanced",
    icon: "Layers",
    analogy:
      "Metaclass ek class ki class hai — jaise class object ka blueprint hai, waise metaclass class ka blueprint hai. Jaise government rule banati hai ki kaise naye states bante hain (state ka class), aur states districts banate hain (district ka class). Metaclass se aap control kar sakte ho ki classes bante waqt kya hota hai — attributes add hon, validation ho, ya behavior modify ho. `type` Python ka default metaclass hai.",
    codeSnippet: `# type se dynamically class banana
MyClass = type("MyClass", (), {"x": 10, "greet": lambda self: print("Hi!")})

obj = MyClass()
print(obj.x)       # 10
obj.greet()        # Hi!

# Custom metaclass
class SingletonMeta(type):
    _instances = {}

    def __call__(cls, *args, **kwargs):
        if cls not in cls._instances:
            cls._instances[cls] = super().__call__(*args, **kwargs)
        return cls._instances[cls]

# Singleton class - sirf ek instance banta hai
class Database(metaclass=SingletonMeta):
    def __init__(self):
        self.connected = False
        print("Database initialized")

db1 = Database()
db2 = Database()
print(f"Same instance? {db1 is db2}")  # True

# Metaclass for validation
class ValidatedMeta(type):
    def __new__(mcs, name, bases, namespace):
        if name != "Base":
            if "process" not in namespace:
                raise TypeError(f"{name} must have a 'process' method")
        return super().__new__(mcs, name, bases, namespace)

class Worker(metaclass=ValidatedMeta):
    def process(self):
        return "working"`,
    explanation:
      "`type(name, bases, dict)` se dynamically class ban jati hai. Custom metaclass `type` se inherit karta hai aur `__new__` ya `__call__` ko override karta hai. `__new__` class banne se pehle chalta hai — namespace modify kar sakte ho. `__call__` instance banne pe chalta hai — Singleton pattern yahin se hota hai. `metaclass=MyMeta` se class ko custom metaclass assign karte hain.",
    challenge: {
      prompt:
        "Ek custom metaclass `TagMeta` banao jo har class mein automatically ek `created_by` attribute set kare jisme 'TagMeta' likha ho. Ek class `MyClass` iska use karke banao aur check karo.",
      starterCode: `class TagMeta(type):
    def __new__(mcs, name, bases, namespace):
        # Niche likho
        pass

class MyClass(metaclass=TagMeta):
    pass

print(MyClass.created_by)`,
      solution: `class TagMeta(type):
    def __new__(mcs, name, bases, namespace):
        namespace["created_by"] = "TagMeta"
        return super().__new__(mcs, name, bases, namespace)

class MyClass(metaclass=TagMeta):
    pass

print(MyClass.created_by)`,
      hint: "__new__ mein namespace['created_by'] = 'TagMeta' set karo, phir super().__new__ ko namespace pass karo.",
    },
  },
  {
    id: "advanced-memory",
    title: "Memory Management",
    phase: "advanced",
    icon: "Database",
    analogy:
      "Memory management ghar ka budget jaisa hai. Aapke paas limited paise (RAM) hain — kaise use karna hai aap decide karte ho. Python apne aap manage karta hai (garbage collection) par aap control bhi kar sakte ho. Reference counting: jab kisi object ka koi reference nahi rehta toh wo delete ho jata hai. Jaise koi bhi insaan ghar ka member nahi raha toh room khaali ho jata hai. `gc` module se manual control bhi milta hai.",
    codeSnippet: `import sys
import gc

# Reference counting
a = [1, 2, 3]
b = a  # b bhi same list refer karta hai
print(f"References: {sys.getrefcount(a) - 1}")  # 2 (a aur b)

# Reference remove karna
b = None
print(f"References now: {sys.getrefcount(a) - 1}")  # 1

# Garbage collector manually
gc.collect()  # Manual cleanup

# Memory efficient data structures
import array

# Regular list - har item Python object
regular_list = [i for i in range(1000)]
print(f"List size: {sys.getsizeof(regular_list)} bytes")

# Array - C-type data, compact
arr = array.array('i', range(1000))
print(f"Array size: {sys.getsizeof(arr)} bytes")

# __slots__ - memory save for classes
class RegularPlayer:
    def __init__(self):
        self.name = ""
        self.score = 0

class SlotPlayer:
    __slots__ = ['name', 'score']
    def __init__(self):
        self.name = ""
        self.score = 0

p1 = RegularPlayer()
p2 = SlotPlayer()
print(f"Regular: {sys.getsizeof(p1)} bytes")
print(f"Slots: {sys.getsizeof(p2)} bytes")`,
    explanation:
      "`sys.getrefcount()` se object ke references count pata chalte hain. Jab count 0 ho jata hai toh Python object ko delete kar deta hai. `gc.collect()` manual garbage collection trigger karta hai — circular references ke liye zaroori. `array.array` C-type data use karta hai, regular list se kam memory. `__slots__` class se `__dict__` hat jata hai — fixed attributes, kam memory per object. Large-scale applications mein yeh bahut farak padta hai.",
    challenge: {
      prompt:
        "Ek regular class aur ek `__slots__` wali class banao, dono mein 3 attributes ho. Dono ke ek object banao aur `sys.getsizeof()` se size compare karo.",
      starterCode: `import sys

class Regular:
    def __init__(self):
        self.x = 0
        self.y = 0
        self.z = 0

class Slotted:
    # Niche __slots__ define karo
    pass

r = Regular()
s = Slotted()
print(f"Regular: {sys.getsizeof(r)} bytes")
print(f"Slotted: {sys.getsizeof(s)} bytes")`,
      solution: `import sys

class Regular:
    def __init__(self):
        self.x = 0
        self.y = 0
        self.z = 0

class Slotted:
    __slots__ = ['x', 'y', 'z']
    def __init__(self):
        self.x = 0
        self.y = 0
        self.z = 0

r = Regular()
s = Slotted()
print(f"Regular: {sys.getsizeof(r)} bytes")
print(f"Slotted: {sys.getsizeof(s)} bytes")`,
      hint: "__slots__ = ['x', 'y', 'z'] class body mein define karo, __init__ mein values set karo.",
    },
  },
];
