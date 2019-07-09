<?php include('templates/header.php'); ?>
  <?php

  if (isset($_POST['submit']) && !empty($_POST['email'])) {
    $file = 'email_list.txt';
    file_put_contents($file, $_POST['email'] . "\r\n", FILE_APPEND | LOCK_EX);
  }
  ?>
  <script type="text/javascript">
    fbq('track', 'Lead');
    
    setTimeout(() => {
      window.location.href = './New Choice NY Opt Out Guide.pdf';
    }, 3000);
  </script>
  <section class="information">
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-lg-6 col-sm-12 text-center">
          <p>Redirecting in a few seconds ...</p>
        </div>
      </div>
    </div>
  </section>
</header>
<?php include('templates/footer.php'); ?>