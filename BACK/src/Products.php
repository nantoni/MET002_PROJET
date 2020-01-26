<?php



use Doctrine\ORM\Mapping as ORM;

/**
 * Products
 *
 * @ORM\Table(name="products")
 * @ORM\Entity
 */
class Products
{
    /**
     * @var int
     *
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="IDENTITY")
     */
    private $id;

    /**
     * @var string
     *
     * @ORM\Column(name="name", type="string", length=45, nullable=false)
     */
    private $name;

    /**
     * @var string|null
     *
     * @ORM\Column(name="image", type="string", length=45, nullable=true)
     */
    private $image;

    /**
     * @var string|null
     *
     * @ORM\Column(name="description", type="string", length=45, nullable=true)
     */
    private $description;

    /**
     * @var string|null
     *
     * @ORM\Column(name="size", type="string", length=45, nullable=true)
     */
    private $size;

    /**
     * @var string
     *
     * @ORM\Column(name="price", type="decimal", precision=10, scale=2, nullable=false)
     */
    private $price;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="addDate", type="datetime", nullable=false, options={"default"="CURRENT_TIMESTAMP"})
     */
    private $adddate = 'CURRENT_TIMESTAMP';

    /**
     * @var int
     *
     * @ORM\Column(name="stockNumber", type="integer", nullable=false)
     */
    private $stocknumber = '0';


    /**
     * Get id.
     *
     * @return int
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set name.
     *
     * @param string $name
     *
     * @return Products
     */
    public function setName($name)
    {
        $this->name = $name;

        return $this;
    }

    /**
     * Get name.
     *
     * @return string
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * Set image.
     *
     * @param string|null $image
     *
     * @return Products
     */
    public function setImage($image = null)
    {
        $this->image = $image;

        return $this;
    }

    /**
     * Get image.
     *
     * @return string|null
     */
    public function getImage()
    {
        return $this->image;
    }

    /**
     * Set description.
     *
     * @param string|null $description
     *
     * @return Products
     */
    public function setDescription($description = null)
    {
        $this->description = $description;

        return $this;
    }

    /**
     * Get description.
     *
     * @return string|null
     */
    public function getDescription()
    {
        return $this->description;
    }

    /**
     * Set size.
     *
     * @param string|null $size
     *
     * @return Products
     */
    public function setSize($size = null)
    {
        $this->size = $size;

        return $this;
    }

    /**
     * Get size.
     *
     * @return string|null
     */
    public function getSize()
    {
        return $this->size;
    }

    /**
     * Set price.
     *
     * @param string $price
     *
     * @return Products
     */
    public function setPrice($price)
    {
        $this->price = $price;

        return $this;
    }

    /**
     * Get price.
     *
     * @return string
     */
    public function getPrice()
    {
        return $this->price;
    }

    /**
     * Set adddate.
     *
     * @param \DateTime $adddate
     *
     * @return Products
     */
    public function setAdddate($adddate)
    {
        $this->adddate = $adddate;

        return $this;
    }

    /**
     * Get adddate.
     *
     * @return \DateTime
     */
    public function getAdddate()
    {
        return $this->adddate;
    }

    /**
     * Set stocknumber.
     *
     * @param int $stocknumber
     *
     * @return Products
     */
    public function setStocknumber($stocknumber)
    {
        $this->stocknumber = $stocknumber;

        return $this;
    }

    /**
     * Get stocknumber.
     *
     * @return int
     */
    public function getStocknumber()
    {
        return $this->stocknumber;
    }
}
