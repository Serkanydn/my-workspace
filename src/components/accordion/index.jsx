import React, { useEffect } from "react";
import { IoIosArrowForward } from "react-icons/io";
import "./style.css";

function Accordion() {
  const toggle = ({ target }) => {
    target.closest(".accordion").classList.toggle("open");
  };

  useEffect(() => {
    const accordionsHeader = document.querySelectorAll(".accordion .header");

    accordionsHeader.forEach((header) => {
      header.addEventListener("click", toggle);
    });

    return () => {
      accordionsHeader.forEach((header) => {
        header.removeEventListener("click", toggle);
      });
    };
  }, []);

  return (
    <div className="simple-accordion">
      <div className="accordions">
        <div className="accordion">
          <button className="header">
            <IoIosArrowForward className="icon" />
            Toggle
          </button>
          <div className="body">
            <div className="content">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
                accusamus culpa deleniti, reiciendis repellat iste voluptate
                odit eveniet neque vero nesciunt quaerat rem voluptatibus enim
                debitis blanditiis assumenda nobis! Odit et blanditiis est
                debitis veritatis modi accusamus, laboriosam tempora repellat
                animi, labore, doloremque accusantium maxime atque. Velit cum
                tempora quos id. Aliquam consequatur accusantium quaerat libero
                quam mollitia et dolorem assumenda placeat quod ab eos iste quia
                vitae voluptas obcaecati eius deserunt illo nam adipisci quis,
                eveniet dolor provident. Incidunt ipsum nesciunt dicta,
                laboriosam eveniet quaerat fugiat architecto repellendus eius,
                amet dolor earum quo explicabo inventore pariatur neque iste.
                Ipsum fugiat explicabo sed consequuntur at expedita et debitis
                quis adipisci esse molestiae doloribus alias a, quod quia
                aperiam voluptas laborum! Eum exercitationem, ex cupiditate,
                ipsa magni aliquam dicta in quod iure cum inventore culpa dolore
                architecto omnis. Error illum sapiente recusandae, cum
                exercitationem unde doloribus voluptas quibusdam tenetur libero
                molestiae quod culpa voluptatem voluptates aliquid perferendis
                placeat quasi facilis aperiam ducimus quam totam vitae! Unde,
                dolorem dolore officiis magni accusantium quam laboriosam
                praesentium atque eligendi nesciunt sint ea facere recusandae
                enim aspernatur nostrum, eveniet porro, suscipit optio. Ut dicta
                dolorum alias officiis dolor. In veritatis, obcaecati impedit
                harum a consequatur!
              </p>
            </div>
          </div>
        </div>
        <div className="accordion">
          <button className="header">
            <IoIosArrowForward className="icon" />
            Toggle
          </button>
          <div className="body">
            <div className="content">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
                accusamus culpa deleniti, reiciendis repellat iste voluptate
                odit eveniet neque vero nesciunt quaerat rem voluptatibus enim
                debitis blanditiis assumenda nobis! Odit et blanditiis est
                debitis veritatis modi accusamus, laboriosam tempora repellat
                animi, labore, doloremque accusantium maxime atque. Velit cum
                tempora quos id. Aliquam consequatur accusantium quaerat libero
                quam mollitia et dolorem assumenda placeat quod ab eos iste quia
                vitae voluptas obcaecati eius deserunt illo nam adipisci quis,
                eveniet dolor provident. Incidunt ipsum nesciunt dicta,
                laboriosam eveniet quaerat fugiat architecto repellendus eius,
                amet dolor earum quo explicabo inventore pariatur neque iste.
                Ipsum fugiat explicabo sed consequuntur at expedita et debitis
                quis adipisci esse molestiae doloribus alias a, quod quia
                aperiam voluptas laborum! Eum exercitationem, ex cupiditate,
                ipsa magni aliquam dicta in quod iure cum inventore culpa dolore
                architecto omnis. Error illum sapiente recusandae, cum
                exercitationem unde doloribus voluptas quibusdam tenetur libero
                molestiae quod culpa voluptatem voluptates aliquid perferendis
                placeat quasi facilis aperiam ducimus quam totam vitae! Unde,
                dolorem dolore officiis magni accusantium quam laboriosam
                praesentium atque eligendi nesciunt sint ea facere recusandae
                enim aspernatur nostrum, eveniet porro, suscipit optio. Ut dicta
                dolorum alias officiis dolor. In veritatis, obcaecati impedit
                harum a consequatur!
              </p>
            </div>
          </div>
        </div>
        <div className="accordion">
          <button className="header">
            <IoIosArrowForward className="icon" />
            Toggle
          </button>
          <div className="body">
            <div className="content">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
                accusamus culpa deleniti, reiciendis repellat iste voluptate
                odit eveniet neque vero nesciunt quaerat rem voluptatibus enim
                debitis blanditiis assumenda nobis! Odit et blanditiis est
                debitis veritatis modi accusamus, laboriosam tempora repellat
                animi, labore, doloremque accusantium maxime atque. Velit cum
                tempora quos id. Aliquam consequatur accusantium quaerat libero
                quam mollitia et dolorem assumenda placeat quod ab eos iste quia
                vitae voluptas obcaecati eius deserunt illo nam adipisci quis,
                eveniet dolor provident. Incidunt ipsum nesciunt dicta,
                laboriosam eveniet quaerat fugiat architecto repellendus eius,
                amet dolor earum quo explicabo inventore pariatur neque iste.
                Ipsum fugiat explicabo sed consequuntur at expedita et debitis
                quis adipisci esse molestiae doloribus alias a, quod quia
                aperiam voluptas laborum! Eum exercitationem, ex cupiditate,
                ipsa magni aliquam dicta in quod iure cum inventore culpa dolore
                architecto omnis. Error illum sapiente recusandae, cum
                exercitationem unde doloribus voluptas quibusdam tenetur libero
                molestiae quod culpa voluptatem voluptates aliquid perferendis
                placeat quasi facilis aperiam ducimus quam totam vitae! Unde,
                dolorem dolore officiis magni accusantium quam laboriosam
                praesentium atque eligendi nesciunt sint ea facere recusandae
                enim aspernatur nostrum, eveniet porro, suscipit optio. Ut dicta
                dolorum alias officiis dolor. In veritatis, obcaecati impedit
                harum a consequatur!
              </p>
            </div>
          </div>
        </div>
        <div className="accordion">
          <button className="header">
            <IoIosArrowForward className="icon" />
            Toggle
          </button>
          <div className="body">
            <div className="content">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
                accusamus culpa deleniti, reiciendis repellat iste voluptate
                odit eveniet neque vero nesciunt quaerat rem voluptatibus enim
                debitis blanditiis assumenda nobis! Odit et blanditiis est
                debitis veritatis modi accusamus, laboriosam tempora repellat
                animi, labore, doloremque accusantium maxime atque. Velit cum
                tempora quos id. Aliquam consequatur accusantium quaerat libero
                quam mollitia et dolorem assumenda placeat quod ab eos iste quia
                vitae voluptas obcaecati eius deserunt illo nam adipisci quis,
                eveniet dolor provident. Incidunt ipsum nesciunt dicta,
                laboriosam eveniet quaerat fugiat architecto repellendus eius,
                amet dolor earum quo explicabo inventore pariatur neque iste.
                Ipsum fugiat explicabo sed consequuntur at expedita et debitis
                quis adipisci esse molestiae doloribus alias a, quod quia
                aperiam voluptas laborum! Eum exercitationem, ex cupiditate,
                ipsa magni aliquam dicta in quod iure cum inventore culpa dolore
                architecto omnis. Error illum sapiente recusandae, cum
                exercitationem unde doloribus voluptas quibusdam tenetur libero
                molestiae quod culpa voluptatem voluptates aliquid perferendis
                placeat quasi facilis aperiam ducimus quam totam vitae! Unde,
                dolorem dolore officiis magni accusantium quam laboriosam
                praesentium atque eligendi nesciunt sint ea facere recusandae
                enim aspernatur nostrum, eveniet porro, suscipit optio. Ut dicta
                dolorum alias officiis dolor. In veritatis, obcaecati impedit
                harum a consequatur!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Accordion;
