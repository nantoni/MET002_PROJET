<?php



use Doctrine\ORM\Mapping as ORM;

/**
 * Orders
 *
 * @ORM\Table(name="orders", uniqueConstraints={@ORM\UniqueConstraint(name="id_UNIQUE", columns={"id"})})
 * @ORM\Entity
 */
class Orders
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
     * @var int
     *
     * @ORM\Column(name="FK_userId", type="integer", nullable=false)
     */
    private $fkUserid;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="date", type="datetime", nullable=false)
     */
    private $date;

    /**
     * @var int
     *
     * @ORM\Column(name="trackingNumber", type="integer", nullable=false)
     */
    private $trackingnumber;

    /**
     * @var string
     *
     * @ORM\Column(name="address", type="string", length=45, nullable=false)
     */
    private $address;

    /**
     * @var int
     *
     * @ORM\Column(name="postCode", type="integer", nullable=false)
     */
    private $postcode;

    /**
     * @var string
     *
     * @ORM\Column(name="city", type="string", length=45, nullable=false)
     */
    private $city;

    /**
     * @var string
     *
     * @ORM\Column(name="country", type="string", length=45, nullable=false)
     */
    private $country;


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
     * Set fkUserid.
     *
     * @param int $fkUserid
     *
     * @return Orders
     */
    public function setFkUserid($fkUserid)
    {
        $this->fkUserid = $fkUserid;

        return $this;
    }

    /**
     * Get fkUserid.
     *
     * @return int
     */
    public function getFkUserid()
    {
        return $this->fkUserid;
    }

    /**
     * Set date.
     *
     * @param \DateTime $date
     *
     * @return Orders
     */
    public function setDate($date)
    {
        $this->date = $date;

        return $this;
    }

    /**
     * Get date.
     *
     * @return \DateTime
     */
    public function getDate()
    {
        return $this->date;
    }

    /**
     * Set trackingnumber.
     *
     * @param int $trackingnumber
     *
     * @return Orders
     */
    public function setTrackingnumber($trackingnumber)
    {
        $this->trackingnumber = $trackingnumber;

        return $this;
    }

    /**
     * Get trackingnumber.
     *
     * @return int
     */
    public function getTrackingnumber()
    {
        return $this->trackingnumber;
    }

    /**
     * Set address.
     *
     * @param string $address
     *
     * @return Orders
     */
    public function setAddress($address)
    {
        $this->address = $address;

        return $this;
    }

    /**
     * Get address.
     *
     * @return string
     */
    public function getAddress()
    {
        return $this->address;
    }

    /**
     * Set postcode.
     *
     * @param int $postcode
     *
     * @return Orders
     */
    public function setPostcode($postcode)
    {
        $this->postcode = $postcode;

        return $this;
    }

    /**
     * Get postcode.
     *
     * @return int
     */
    public function getPostcode()
    {
        return $this->postcode;
    }

    /**
     * Set city.
     *
     * @param string $city
     *
     * @return Orders
     */
    public function setCity($city)
    {
        $this->city = $city;

        return $this;
    }

    /**
     * Get city.
     *
     * @return string
     */
    public function getCity()
    {
        return $this->city;
    }

    /**
     * Set country.
     *
     * @param string $country
     *
     * @return Orders
     */
    public function setCountry($country)
    {
        $this->country = $country;

        return $this;
    }

    /**
     * Get country.
     *
     * @return string
     */
    public function getCountry()
    {
        return $this->country;
    }
}
