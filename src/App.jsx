/* ============================================================
   App.jsx (.tsx екв.), React Router v5
   ============================================================ */

const { HashRouter, Switch, Route, Redirect, useLocation } = ReactRouterDOM;

function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    // Само ако back-бутонът на детайлна страница е поискал възстановяване
    // на позицията, пропускаме scrollTo(0,0). Самият back handler го прилага
    // и изтрива флага.
    if (sessionStorage.getItem("pendingScrollRestore")) return;
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/animals/brown-bear" component={BrownBearDetail} />
          <Route exact path="/animals/balkan-chamois" component={BalkanChamoisDetail} />
          <Route exact path="/animals/european-ground-squirrel" component={EuropeanGroundSquirrelDetail} />
          <Route exact path="/animals/wildcat" component={WildcatDetail} />
          <Route exact path="/animals/eurasian-otter" component={EurasianOtterDetail} />
          <Route exact path="/animals/monk-seal" component={MonkSealDetail} />
          <Route exact path="/animals/egyptian-vulture" component={EgyptianVultureDetail} />
          <Route exact path="/animals/bearded-vulture" component={BeardedVultureDetail} />
          <Route exact path="/animals/imperial-eagle" component={ImperialEagleDetail} />
          <Route exact path="/animals/hermanns-tortoise" component={HermannsTortoiseDetail} />
          <Route exact path="/animals/more" component={AnimalsMore} />
          <Route path="/animals" component={Animals} />
          <Route exact path="/plants/silivryak" component={SilivryakDetail} />
          <Route exact path="/plants/urumov-mullein" component={UrumovMulleinDetail} />
          <Route exact path="/plants/rila-primrose" component={RilaPrimroseDetail} />
          <Route exact path="/plants/snowdrop" component={SnowdropDetail} />
          <Route exact path="/plants/yellow-lily" component={YellowLilyDetail} />
          <Route exact path="/plants/alpine-rose" component={AlpineRoseDetail} />
          <Route exact path="/plants/thracian-yarrow" component={ThracianYarrowDetail} />
          <Route exact path="/plants/pontic-fritillary" component={PonticFritillaryDetail} />
          <Route exact path="/plants/more" component={PlantsMore} />
          <Route path="/plants" component={Plants} />
          <Route path="/red-book" component={RedBook} />
          <Route path="/organizations" component={Organizations} />
          <Route path="/contact" component={Contact} />
          <Redirect to="/" />
        </Switch>
      </Layout>
    </HashRouter>
  );
}

window.App = App;
