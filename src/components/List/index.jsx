import './style.css'

function List ({
    title,
    subtitlesecondlist
}) {
    return (
        <section>
  <h2 id="exemplo-h2">{title}</h2>

  <h3>{subtitlesecondlist}</h3>

<ul id="ul">
<li>batata</li>
<li>pao</li>
<li>arooz</li>
</ul>

<h3>lista ordenada </h3>
<ol>
<li>feijao</li>
<li>pokemon</li>
<li>jojo</li>

</ol>


</section>

    )
}

export default List



