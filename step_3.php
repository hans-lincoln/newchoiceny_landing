<?php include('templates/header.php'); ?>
  <section class="information">
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-lg-6 col-sm-12">
          <h1>Enter employer and union info</h1>
          <h4>This information allows us to send your request to the right people, whether to your employer or union.</h4>
          <p>By clicking submit, you indicate that you have read and agree to our Terms of Service. You also affirm that you are the person named above. You understand that exercising your Janus rights will mean you will no longer be a member of the union and won't receive certain union services. You consent to sending a reqeust to your reployer and if necessary to the union.</p>
        </div>
        <div class="col-md-6 col-lg-6 col-sm-12 text-right">
          <div class="information_inner">
            <div class="progress_container">
              <div class="d-flex align-items-center">
                <div class="progress_item_complete"></div>
                <div class="progress_item_complete"></div>
                <div class="progress_item_progress"></div>
              </div>
              <label>3/3 Employer & Union Information</label>
            </div>
            <form class="information_form" action="verify" method="post">
              <div class="row">
                <div class="col-md-12">
                  <select name="employer_county" id="employer_county" class="form-control" required>
                    <option value="">Choose Employer County*</option> <option value="New York City">New York City</option><option value="New York State">New York State</option><option value="Albany">Albany</option><option value="Allegany">Allegany</option><option value="Broome">Broome</option><option value="Cattaraugus">Cattaraugus</option><option value="Cayuga">Cayuga</option><option value="Chautauqua">Chautauqua</option><option value="Chemung">Chemung</option><option value="Chenango">Chenango</option><option value="Clinton">Clinton</option><option value="Columbia">Columbia</option><option value="Cortland">Cortland</option><option value="Delaware">Delaware</option><option value="Dutchess">Dutchess</option><option value="Erie">Erie</option><option value="Essex">Essex</option><option value="Franklin">Franklin</option><option value="Fulton">Fulton</option><option value="Genesee">Genesee</option><option value="Greene">Greene</option><option value="Hamilton">Hamilton</option><option value="Herkimer">Herkimer</option><option value="Jefferson">Jefferson</option><option value="Lewis">Lewis</option><option value="Livingston">Livingston</option><option value="Madison">Madison</option><option value="Monroe">Monroe</option><option value="Montgomery">Montgomery</option><option value="Nassau">Nassau</option><option value="Niagara">Niagara</option><option value="Oneida">Oneida</option><option value="Onondaga">Onondaga</option><option value="Ontario">Ontario</option><option value="Orange">Orange</option><option value="Orleans">Orleans</option><option value="Oswego">Oswego</option><option value="Otsego">Otsego</option><option value="Putnam">Putnam</option><option value="Rensselaer">Rensselaer</option><option value="Rockland">Rockland</option><option value="Saratoga">Saratoga</option><option value="Schenectady">Schenectady</option><option value="Schoharie">Schoharie</option><option value="Schuyler">Schuyler</option><option value="Seneca">Seneca</option><option value="St. Lawrence">St. Lawrence</option><option value="Steuben">Steuben</option><option value="Suffolk">Suffolk</option><option value="Sullivan">Sullivan</option><option value="Tioga">Tioga</option><option value="Tompkins">Tompkins</option><option value="Ulster">Ulster</option><option value="Warren">Warren</option><option value="Washington">Washington</option><option value="Wayne">Wayne</option><option value="Westchester">Westchester</option><option value="Wyoming">Wyoming</option><option value="Yates">Yates</option>
                  </select>
                </div>
                <div class="col-md-12">
                  <select name="employer_name" id="employer_name" class="form-control" required>
                    <option value="">Choose Employer Name*</option>
                  </select>
                  
                </div>
                <div class="col-md-12">
                  <select name="union" id="union" class="form-control" required>
                    <option value="">Choose Union</option> <option value="CSEA: Civil Service Employees Association">CSEA: Civil Service Employees Association</option><option value="DC37: AFSCME District Council 37 (NYC)">DC37: AFSCME District Council 37 (NYC)</option><option value="LEEBA: Law Enforcement Employees Benevolent Association">LEEBA: Law Enforcement Employees Benevolent Association</option><option value="NYSUT: New York State United Teachers">NYSUT: New York State United Teachers</option><option value="PEF: Public Employees Federation">PEF: Public Employees Federation</option><option value="PSC: Professional Staff Congress (CUNY)">PSC: Professional Staff Congress (CUNY)</option><option value="UFT: United Federation of Teachers (NYC)">UFT: United Federation of Teachers (NYC)</option><option value="UUP: United University Professions (SUNY)">UUP: United University Professions (SUNY)</option>
                  </select>
                </div>
                <div class="col-md-12 text-left">
                  <label for="not_listed">
                    <input name="not_listed" id="not_listed" type="checkbox" />
                    My Union is not listed
                  </label>
                </div>
                <div class="col-md-12 custom_union">
                  <input type="text" name="union_name" class="form-control" placeholder="Enter Union Name" required/>
                </div>
                <div class="col-md-12">
                  <input type="text" name="union_id" class="form-control" placeholder="Union ID # (Optional)"/>
                </div>
                <div class="col-md-12">
                  <input type="submit" value="Submit" class="btn btn-primary" />
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