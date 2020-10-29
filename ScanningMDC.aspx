<%@ Page Language="vb" AutoEventWireup="false" MasterPageFile="~/ERG.Master" CodeBehind="ScanningMDC.aspx.vb" Inherits="website2012.ScanningMDC" 
    title="Scanning MDC Calculator" %>
<asp:Content ID="Content1" ContentPlaceHolderID="ContentPlaceHolder2" runat="server">
    <style type="text/css">
        .style1
        {
            width: 204px;
            padding-top: 3px;
            padding-bottom: 3px;
            padding-right: 5px;
        }

    </style>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    
 
    <table style="margin-bottom: 15px; width: 100%"><tr>
    <td style="padding-top: 5px; padding-bottom: 5px; background-color: #C0C0C0; color: #FFFFFF; padding-left: 15px;">

<span style="font-size: 16pt; color: #FFFFFF; font-weight: bolder;">Scan MDC Calculator</span></td></tr>

<tr><td style="padding-top: 15px"><span style="font-size: 10pt; color: #000000">This utility calculates scan MDCs for select contaminant radionuclides in 
soil for 1-second scaler counts with NaI detectors based on probabilistic MCNPX modeling of detection efficiency 
along with related modifications to the MARSSIM method (see Resource links below for supporting technical 
information).</span></td></tr>

</table>


           <asp:ScriptManager ID="ScriptManager2" runat="server" 

AsyncPostBackTimeOut="36000" >

</asp:ScriptManager>

           
         <asp:UpdatePanel runat="server" ID="UpdatePanel1" UpdateMode = "Conditional" >
         
      <ContentTemplate>
      <div>
<table width="100%" 
        
    style="padding-top: 20px; border-top-style: solid; border-top-width: 1px; border-top-color: #808080; border-bottom-style: solid; border-bottom-width: 1px; border-bottom-color: #808080; padding-bottom: 20px;">
<tr>
<td style="Width: auto" valign="top">
<table style="padding: 5px; border: 1px solid #C0C0C0; width: 90%">
<tr><td align="right" class="style1">Gross Background (cpm): </td>
    <td class="style1"><asp:TextBox ID="TextBoxBG" runat="server" Width="75px"></asp:TextBox></td></tr>

<tr><td align="right" class="style1">Detector Type:</td>
<td class="style1"><asp:DropDownList ID="DropDownDet" runat="server" Width="100%" 
        AutoPostBack="True"></asp:DropDownList> </td></tr>



<tr><td align="right" class="style1">Contaminant<span>: </span></td>
    <td class="style1">
    <asp:DropDownList ID="DropDownCont" runat="server" Width="100%" AutoPostBack="True"></asp:DropDownList> </td></tr>
    
    
<tr><td align="right" class="style1">Source Diameter (cm)<span>: </span></td>
    <td class="style1">
    <asp:DropDownList ID="DropDownDiam" runat="server" Width="100%" AutoPostBack="True"></asp:DropDownList> </td></tr>
    
    <tr><td align="right" class="style1">Detector Height (cm)<span>: </span></td>
    <td class="style1">
    <asp:DropDownList ID="DropDownHeight" runat="server" Width="100%"></asp:DropDownList> </td></tr>
    
    <tr><td align="right" class="style1">Scanning Speed<span> (m/second): </span></td>
    <td class="style1">
    <asp:TextBox ID="TextScan" runat="server" Width="75px"></asp:TextBox> </td></tr>
    
    <tr><td align="right" class="style1">False Positive Proportion<span>: </span></td>
    <td class="style1">
        <asp:DropDownList ID="DropDownFP" runat="server" Width="100%">
        </asp:DropDownList>
        </td></tr>
    
    <tr><td align="right" class="style1">True Positive Proportion<span>: </span></td>
    <td class="style1">
        <asp:DropDownList ID="DropDownTP" runat="server" Width="100%">
        </asp:DropDownList>
        </td></tr>
    

    
<tr><td align="right" class="style1"></td><td style="padding-top: 10px;" 
        align="right" class="style1"><asp:Button ID="Button1" runat="server" Text="Calculate" /></td></tr>
</table>

</td> 
<td valign="top">

<table style="width: 412px;">
<tr><td  style="padding-top: 10px"><asp:Label ID="Labeldprime" runat="server" Text=""></asp:Label></td></tr>
<tr><td  style="padding-top: 10px"><asp:Label ID="LabelMDCCnts" runat="server" Text=""></asp:Label></td></tr>
<tr><td  style="padding-top: 10px"><asp:Label ID="LabelVol" runat="server" Text=""></asp:Label></td></tr>
<tr><td  style="padding-top: 10px"><asp:Label ID="LabelDetector" runat="server" Text=""></asp:Label></td></tr>
<tr><td  style="padding-top: 10px"><asp:Label ID="LabelSource" runat="server" Text=""></asp:Label></td></tr>
<tr><td  style="padding-top: 10px"><asp:Label ID="LabelScan" runat="server" Text=""></asp:Label></td></tr>
<tr><td style="padding-top: 10px"><asp:Label ID="LabelMDC" runat="server" Font-Bold="True" Font-Size="Small" ForeColor="#333333"></asp:Label></td></tr>
<tr><td style="padding-top: 10px">&nbsp;</td></tr>

</table>


</td> 
</tr>

</table>
</div>
</ContentTemplate>

        </asp:UpdatePanel>

<div style="width: 100%; margin-top: 15px; ">

<table style="width: 100%;">

<tr><td>
<span style="font-size: 9pt; color: #000000">
The scan MDC values that can be calculated on this webpage are generated with a “probabilistic method” as described by Alecksen and Whicker (2016) in the Health Physics journal. This method was designed specifically for GPs-based gamma surveys that employ commonly used sodium iodide (NaI) scintillation detectors. The reference for citation of the method or any scan MDC values calculated from this webpage is as follows:
</span>
<br /><br />
<span style="font-size: 9pt; font-style: italic; color: Blue">
Alecksen, T. and Whicker, R.  2016.  Scan MDCs for GPS-Based Gamma Radiation Surveys.  Operational Radiation Safety, Health Physics 111 (Supplement 2): S123-S132.
</span>
<br /><br />
<span style="font-size: 9pt; color: #000000">
A White Paper which provides a technical overview of the probabilistic method for calculating scan MDCs and how this online calculator generates respective values can be found under the “Resources” links below. This White Paper is limited in scope and is provided as a courtesy to users of the scan MDC calculator.</span> 
<span style="font-size: 9pt; color: red; font-style: italic;">Any citation/referencing of the probabilistic method or respectively generated scan MDC values should cite the article in Health Physics as noted above.
</span>
</td></tr>
</table>

<table>

<tr>
<td style="padding-top: 15px">
Resources: </td></tr>
<tr><td><a href = "http://www.ergoffice.com/Download%20Files/Probabilistic%20Method%20Scan%20MDCs%20(WhitePaper).pdf" target="_blank">Probabilistic Scan MDC White Paper</a></td></tr>
<tr><td><a href = "http://www.ergoffice.com/Download%20Files/NUREG-1507.pdf" target="_blank">NUREG-1507 (NRC, 1998)</a></td></tr>
<tr><td style="padding-top: 15px"><span style="font-size: 9pt; font-style: italic; color: #FF0000">Disclaimer: </span> <span style="font-size: 8pt; font-style: italic; color: #666666">While every effort has been made to ensure the technical validity of calculated Scan MDC values that are available to the public through the ERG Scan MDC Database Interface, Environmental Restoration Group, Inc. (ERG) makes no claims or warranties as to the accuracy or defensibility of generated values and shall not be held responsible for any legal or business liabilities, regulatory ramifications, damages, losses or any other issue that may arise from application of any of the data or information provided within this web-based program.  Users assume all risks and responsibilities associated with the use of any data or information provided on ERG’s Scan MDC Database Interface.</span></td></tr>


</table>



</div>
</asp:Content>
