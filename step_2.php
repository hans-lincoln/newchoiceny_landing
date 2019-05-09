<?php include('templates/header.php'); ?>
  <section class="information">
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-lg-6 col-sm-12">
          <h1>Enter your mailing address</h1>
          <p>The union requires this mailing address be included with your request, and it must match their records for you.</p>
        </div>
        <div class="col-md-6 col-lg-6 col-sm-12 text-right">
          <div class="information_inner">
            <div class="progress_container">
              <div class="d-flex align-items-center">
                <div class="progress_item_complete"></div>
                <div class="progress_item_progress"></div>
                <div class="progress_item"></div>
              </div>
              <label>2/3 Mailing Address</label>
            </div>
            <form class="information_form" action="step_3" method="post">
              <div class="row">
                <div class="col-md-12">
                  <input type="text" placeholder="Address 1*" name="address_1" class="form-control" required />
                </div>
                <div class="col-md-12">
                  <input type="text" placeholder="Address 2" name="address_2" class="form-control" />
                </div>
                <div class="col-md-6 col-city">
                  <input type="text" placeholder="City*" name="city" class="form-control" required/>
                </div>
                <div class="col-md-6 col-zipcode">
                  <input type="text" placeholder="Zipcode*" name="zipcode" class="form-control" required />
                </div>
                <div class="col-md-12">
                  <select class="form-control" name="state">
                    <option>New York</option>
                  </select>
                </div>
                <div class="col-md-12">
                  <input type="submit" value="Continue" class="btn btn-primary" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</header>
<?php include('templates/footer.php'); ?>