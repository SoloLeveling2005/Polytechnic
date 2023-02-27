<?php





abstract class Animal {

    abstract public function walk();


    public function say()
    {
        // TODO: Implement say() method.
        return $this->voice;

    }
}

abstract class Ungulates {

}
abstract class Birds {

}



class Cow extends Animal {
    protected $voice = "Мууу";
    function __construct() {
        echo $this->walk();
    }

    public function walk()
    {
        // TODO: Implement walk() method.
        return "Топ топ топ";
    }
}

class Pig extends Animal {
    protected $voice = "Хрююю";
    function __construct() {
        echo $this->walk();
    }
    public function say()
    {
        // TODO: Implement say() method.
        return $this->voice;
    }
    public function walk()
    {
        // TODO: Implement walk() method.
        return "Топ топ топ";
    }
}

class Chicken extends Animal {
    protected $voice = "КоКоКо";
    function __construct() {
        echo $this->walk();
    }
    public function say()
    {
        // TODO: Implement say() method.
        return $this->voice;
    }
    public function walk()
    {
        // TODO: Implement walk() method.
        return "Топ топ топ";
    }
}

class Goose extends Animal {
    protected $voice = "R";
    function __construct() {
        echo $this->walk();
    }
    public function say()
    {
        // TODO: Implement say() method.
        return $this->voice;
    }
    public function walk()
    {
        // TODO: Implement walk() method.
        return "Топ топ топ";
    }
}

class Turkey extends Animal {
    protected $voice = "КоКоКо";
    function __construct() {
        echo $this->walk();
    }
    public function say()
    {
        // TODO: Implement say() method.
        return $this->voice;
    }
    public function walk()
    {
        // TODO: Implement walk() method.
        return "Топ топ топ";
    }
}

class Horse extends Animal {
    protected $voice = "КоКоКо";
    function __construct() {
        echo $this->walk();
    }
    public function say()
    {
        // TODO: Implement say() method.
        return $this->voice;
    }
    public function walk()
    {
        // TODO: Implement walk() method.
        return "Топ топ топ";
    }
}

class BirdFarm extends Animal {
    protected $voice = "КоКоКо";
    function __construct() {
        echo $this->walk();
    }
    public function say()
    {
        // TODO: Implement say() method.
        return $this->voice;
    }
    public function walk()
    {
        // TODO: Implement walk() method.
        return "Топ топ топ";
    }
}

class Farmer extends Animal {
    protected $voice = "КоКоКо";
    function __construct() {
        echo $this->walk();
    }
    public function say()
    {
        // TODO: Implement say() method.
        return $this->voice;
    }
    public function walk()
    {
        // TODO: Implement walk() method.
        return "Топ топ топ";
    }
}





class Farm {
    public $animals;

    public function addAnimal(Animal $animal) {
        $this->animals[] = $animal;
    }

    public function rollCall() {
        echo "Перекличка:<br>";
        foreach ($this->animals as $animal) {
            echo $animal->say();
            echo "<br>";
        }
    }
}


$farm = new Farm;
$farm->addAnimal(new Cow());
echo "<br>";
$farm->addAnimal(new Pig());
echo "<br>";
$farm->addAnimal(new Pig());
echo "<br>";
$farm->addAnimal(new Chicken());
echo "<br>";
$farm->rollCall();

$farm->addAnimal(new Goose());