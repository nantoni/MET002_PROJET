<?php



use Doctrine\ORM\Mapping as ORM;

/**
 * Ordersproducts
 *
 * @ORM\Table(name="ordersProducts")
 * @ORM\Entity
 */
class Ordersproducts
{
    /**
     * @var int
     *
     * @ORM\Column(name="FK_order", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="NONE")
     */
    private $fkOrder;

    /**
     * @var string
     *
     * @ORM\Column(name="FK_product", type="string", length=45)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="NONE")
     */
    private $fkProduct;

    /**
     * @var string
     *
     * @ORM\Column(name="unitPrice", type="decimal", precision=10, scale=2, nullable=false)
     */
    private $unitprice;

    /**
     * @var int
     *
     * @ORM\Column(name="quantity", type="integer", nullable=false)
     */
    private $quantity;


    /**
     * Set fkOrder.
     *
     * @param int $fkOrder
     *
     * @return Ordersproducts
     */
    public function setFkOrder($fkOrder)
    {
        $this->fkOrder = $fkOrder;

        return $this;
    }

    /**
     * Get fkOrder.
     *
     * @return int
     */
    public function getFkOrder()
    {
        return $this->fkOrder;
    }

    /**
     * Set fkProduct.
     *
     * @param string $fkProduct
     *
     * @return Ordersproducts
     */
    public function setFkProduct($fkProduct)
    {
        $this->fkProduct = $fkProduct;

        return $this;
    }

    /**
     * Get fkProduct.
     *
     * @return string
     */
    public function getFkProduct()
    {
        return $this->fkProduct;
    }

    /**
     * Set unitprice.
     *
     * @param string $unitprice
     *
     * @return Ordersproducts
     */
    public function setUnitprice($unitprice)
    {
        $this->unitprice = $unitprice;

        return $this;
    }

    /**
     * Get unitprice.
     *
     * @return string
     */
    public function getUnitprice()
    {
        return $this->unitprice;
    }

    /**
     * Set quantity.
     *
     * @param int $quantity
     *
     * @return Ordersproducts
     */
    public function setQuantity($quantity)
    {
        $this->quantity = $quantity;

        return $this;
    }

    /**
     * Get quantity.
     *
     * @return int
     */
    public function getQuantity()
    {
        return $this->quantity;
    }
}
